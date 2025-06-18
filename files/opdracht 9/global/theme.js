document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeToggle");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        btn.textContent = "☀️";
    }
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        btn.textContent = isDark ? "☀️" : "🌙";
    });
});
