## **AI Cover Letter Generator **

###  Project Overview

AI Cover Letter Generator is a full-stack web application that automatically generates professional, job-specific cover letters using Google Gemini AI. Users can enter job details, upload their resume, and receive a tailored cover letter instantly.

---

###  Features

* AI-generated professional cover letters
* Resume PDF upload support
* Job description + company-specific customization
* Fast generation using the Gemini API
* Simple and responsive UI
* Copy-to-clipboard functionality

---

###  Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js
* Multer (file upload)
* Google Generative AI (Gemini API)
* dotenv (environment variables)

---

### **📂 Project Structure**

```
AI-Cover-Letter/
│
├── Backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── uploads/
│   └── node_modules/
│
├── Frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

---

### **⚙️ Installation & Setup**

#### **1️⃣ Clone the Repository**

```
git clone <your-repo-link>
cd AI-Cover-Letter
```

---

#### **2️⃣ Backend Setup**

```
cd Backend
npm install
```

---

#### **3️⃣ Create .env File**

Inside **Backend/.env**

```
GEMINI_API_KEY=your_api_key_here
PORT=5000
```

---

#### **4️⃣ Start Backend Server**

```
node server.js
```

Expected Output:

```
Server running on port 5000
```

---

#### **5️⃣ Run Frontend**

Open:

```
Frontend/index.html
```

Or use Live Server in VS Code.

---

### **🔑 Getting Gemini API Key**

1. Go to Google AI Studio
2. Generate API Key
3. Add it to `.env` file

---

### ** How It Works**

1. User enters:

   * Job Role
   * Company Name
   * Job Description
   * Resume Upload

2. Backend:

   * Reads resume text
   * Sends prompt to Gemini API
   * Returns generated cover letter

3. Frontend:

   * Displays cover letter
   * Allows copy action

---

### **📡 API Endpoint**

#### **POST /generate**

Generates a cover letter.

**Form Data:**

* role
* company
* description
* resume (PDF file)

**Response:**

```
{
  "letter": "Generated cover letter text..."
}
```

---

### **❗ Common Issues & Fixes**

**ENV KEY Undefined**

* Ensure `.env` exists in Backend folder
* Restart server after changes

**Model Not Found Error**

* Use supported model like:

```
gemini-1.5-flash
```

**Port Already Running**

```
npx kill-port 5000
```

---

### **📈 Future Improvements**

* Authentication system
* Multiple resume formats (DOCX, TXT)
* Cover letter templates
* Save history
* Export as PDF
* ATS score checker

---

### **🤝 Contribution**

Pull requests are welcome. For major changes, open an issue first.

---

### **📜 License**

MIT License

