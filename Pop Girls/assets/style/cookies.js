
document.addEventListener("DOMContentLoaded", () => {
  const cookieModal = document.querySelector("#cookieModal");

  if (!cookieModal) {
    alert("Ik kan #cookieModal niet vinden in deze HTML!");
    return;
  }

  // Test: open het cookievenster altijd
  cookieModal.showModal();
});
