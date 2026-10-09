
const cookieModal = document.querySelector("#cookieModal");
const cookieButton = document.querySelector("[data-cookie-open]");

cookieButton.addEventListener("click", () => {
  cookieModal.showModal();
});

cookieModal.addEventListener("close", () => {
  const keuze = cookieModal.returnValue;

  if (keuze === "allowed" || keuze === "denied") {
    localStorage.setItem("schoolProjectCookies", keuze);
  }
});
