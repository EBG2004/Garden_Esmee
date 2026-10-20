
document.querySelectorAll(".vinyl-plaat").forEach((plaat) => {
  plaat.style.cursor = "pointer";
  plaat.setAttribute("role", "button");
  plaat.setAttribute("tabindex", "0");
  plaat.setAttribute("aria-label", "Vinylplaat pauzeren of afspelen");

  function wisselAnimatie() {
    const gepauzeerd =
      getComputedStyle(plaat).animationPlayState === "paused";

    plaat.style.animationPlayState = gepauzeerd
      ? "running"
      : "paused";
  }

  plaat.addEventListener("click", wisselAnimatie);

  plaat.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      wisselAnimatie();
    }
  });
});
