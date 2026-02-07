    const form = document.getElementById("coverForm");
    const loading = document.getElementById("loading");
    const output = document.getElementById("output");
    const copyBtn = document.getElementById("copyBtn");

    form.addEventListener("submit", async (e) => {
    e.preventDefault();

    loading.classList.remove("hidden");

    const formData = new FormData();

    formData.append("name", document.getElementById("name").value);
    formData.append("role", document.getElementById("role").value);
    formData.append("company", document.getElementById("company").value);
    formData.append("skills", document.getElementById("skills").value);
    formData.append("jobDesc", document.getElementById("jobDesc").value);

    const resumeFile = document.getElementById("resume").files[0];
    if (resumeFile) {
        formData.append("resume", resumeFile);
    }

    try {
        const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        body: formData
        });

        const data = await res.json();
        outputBox.value = data.letter;

    } catch (err) {
        output.value = "Error generating cover letter";
    }

    loading.classList.add("hidden");
    });

    copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
    alert("Copied!");
    });
