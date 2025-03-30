document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner le bouton hamburger et le menu de navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Ajouter un écouteur d'événement de clic au bouton hamburger
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active'); // Basculer la classe 'active'
        });

        // Fermer le menu lorsqu'un lien est cliqué (optionnel)
        const navItems = document.querySelectorAll('.nav-links li a');
        navItems.forEach(item => {
            item.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.error('Élément(s) manquant(s) dans le DOM.');
    }
});


