const root = document.documentElement;


/* ========================================
   HAWKINS AFBEELDINGEN
======================================== */

const hawkinsImage =
  document.getElementById("hawkinsImage");

const lightHawkins =
  "./afbeeldingen/hawkins.jpg";

const upsideDownHawkins =
  "./afbeeldingen/hawkins-upside-down.jpg";


/* ========================================
   THEMA OPHALEN
======================================== */

const savedTheme =
  localStorage.getItem("stranger-theme");


if (savedTheme === "dark") {

  root.classList.add("dark");

}


/* ========================================
   HAWKINS AFBEELDING AANPASSEN
======================================== */

function updateHawkinsImage() {

  if (!hawkinsImage) {
    return;
  }


  if (root.classList.contains("dark")) {

    hawkinsImage.src =
      upsideDownHawkins;

    hawkinsImage.alt =
      "Hawkins in de Upside Down";

  } else {

    hawkinsImage.src =
      lightHawkins;

    hawkinsImage.alt =
      "Hawkins, Indiana";

  }

}


/* Meteen de juiste afbeelding laden */

updateHawkinsImage();



/* ========================================
   DARK MODE
======================================== */

function toggleTheme() {


  root.classList.toggle("dark");


  const isDark =
    root.classList.contains("dark");


  localStorage.setItem(
    "stranger-theme",
    isDark ? "dark" : "light"
  );


  /* Hawkins afbeelding veranderen */

  updateHawkinsImage();


  /* Demogorgon alleen wanneer
     Upside Down wordt aangezet */

  if (isDark) {

    showDemogorgon();

  }

}



/* ========================================
   SCHUIFJE
======================================== */

function updateThemeSwitch() {


  const switchButton =
    document.querySelector(".switch");


  if (!switchButton) {
    return;
  }


  switchButton.setAttribute(
    "aria-pressed",
    root.classList.contains("dark")
      ? "true"
      : "false"
  );

}


updateThemeSwitch();



/* ========================================
   DEMOGORGON
======================================== */

function showDemogorgon() {


  const demogorgon =
    document.getElementById(
      "demogorgonPopup"
    );


  if (!demogorgon) {
    return;
  }


  /* Oude animatie resetten */

  demogorgon.classList.remove(
    "show"
  );


  /* Browser opnieuw laten laden */

  void demogorgon.offsetWidth;


  /* Demogorgon laten verschijnen */

  demogorgon.classList.add(
    "show"
  );


  /* Na 5 seconden verdwijnen */

  setTimeout(() => {

    demogorgon.classList.remove(
      "show"
    );

  }, 5000);

}