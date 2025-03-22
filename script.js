async function getSummary() {
  const urlInput = document.getElementById("urlInput");
  const resultDiv = document.getElementById("result");
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");

  // Reset UI
  resultDiv.textContent = "";
  errorDiv.textContent = "";
  loadingDiv.style.display = "block";

  try {
    const response = await fetch("http://localhost:3000/get-summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: urlInput.value }),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();
    resultDiv.textContent = data.summary;
  } catch (err) {
    errorDiv.textContent = `Invalid URL`;
  } finally {
    loadingDiv.style.display = "none";
  }
}
