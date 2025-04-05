// Sélectionner le bouton
const backToTopBtn = document.getElementById("backToTopBtn");

// Fonction pour afficher ou cacher le bouton selon le défilement
window.onscroll = function () {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        backToTopBtn.style.display = "block"; // Montrer le bouton
    } else {
        backToTopBtn.style.display = "none"; // Cacher le bouton
    }
};

// Fonction pour remonter en haut de la page
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Défilement fluide
    });
});



