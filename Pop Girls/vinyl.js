
const vinylKnoppen = document.querySelectorAll(".vinyl-knop");

vinylKnoppen.forEach((knop) => {
  const vinyl = knop
    .closest(".artiest-vinyl")
    .querySelector(".vinyl-plaat");

  knop.addEventListener("click", () => {
    const speelt = knop.getAttribute("aria-pressed") === "true";

    vinyl.classList.toggle("gestopt", speelt);

    knop.setAttribute("aria-pressed", String(!speelt));

    knop.textContent = speelt
      ? "▶ Speel plaat af"
      : "Ⅱ Pauzeer plaat";
  });
});