const toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
