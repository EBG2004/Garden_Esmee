
document.addEventListener("DOMContentLoaded", () => {
  const cookieModal = document.querySelector("#cookieModal");
  const cookieButton = document.querySelector("[data-cookie-open]");

  if (cookieModal) {
    // Automatisch openen bij het laden van de pagina
    cookieModal.showModal();
  }

  // De knop onderaan kan het venster ook openen
  if (cookieButton && cookieModal) {
    cookieButton.addEventListener("click", () => {
      if (!cookieModal.open) {
        cookieModal.showModal();
      }
    });
  }

  if (cookieModal) {
    cookieModal.addEventListener("close", () => {
      const keuze = cookieModal.returnValue;

      if (keuze === "allowed" || keuze === "denied") {
        localStorage.setItem("schoolProjectCookies", keuze);
      }
    });
  }
});
