    require("dotenv").config();
    console.log("ENV KEY:", process.env.GEMINI_API_KEY);


    const express = require("express");
    const cors = require("cors");
    const multer = require("multer");
    const pdfParse = require("pdf-parse");
    const fs = require("fs");

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });
    const app = express();
    app.use(cors());
    app.use(express.json());

    const upload = multer({ dest: "uploads/" });


    app.post("/generate", upload.single("resume"), async (req, res) => {
    try {
        const { name, role, company, skills, jobDesc } = req.body;

        let resumeText = "";

        if (req.file) {
        const dataBuffer = fs.readFileSync(req.file.path);
        const pdfData = await pdfParse(dataBuffer);
        resumeText = pdfData.text;
        fs.unlinkSync(req.file.path);
        }

        const prompt = `
    You are a professional career assistant.

    Write a professional, highly personalized cover letter.

    Candidate Name: ${name}
    Applying Role: ${role}
    Company: ${company}
    Skills: ${skills}

    Job Description:
    ${jobDesc}

    Resume Content:
    ${resumeText}

    Rules:
    - 3 to 4 paragraphs
    - Professional tone
    - Company specific
    - Highlight matching skills from resume
    `;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ letter: text });

    } catch (err) {
        console.log("FULL ERROR:", err);
        res.status(500).json({ error: "AI generation failed" });
    }
    });

    app.listen(5000, () => {
    console.log("Server running on port 5000");
    });
