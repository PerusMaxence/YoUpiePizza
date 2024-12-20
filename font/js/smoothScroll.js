// Sélectionne tous les liens dont le href commence par "#accueil-container-2"
document.querySelectorAll('a[href^="#accueil-container-2"], a[href^="#accueil-container-3"]').forEach(anchor => {
  // Ajoute un écouteur d'événements 'click' à chaque lien
  anchor.addEventListener('click', function (e) {
    // Empêche le comportement par défaut du lien
    e.preventDefault();

    // Sélectionne l'élément cible et fait défiler en douceur vers celui-ci
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth' // Option de défilement fluide
    });
  });
});