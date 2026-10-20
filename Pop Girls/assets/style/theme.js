
const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";

    document.documentElement.dataset.theme = isDark ? "dark" : "light";

    themeToggle.textContent = isDark
      ? "☀️ Light mode"
      : "🌙 Dark mode";

    themeToggle.setAttribute("aria-pressed", String(isDark));
  });
} else {
  console.error("De knop #theme-toggle is niet gevonden.");
}
