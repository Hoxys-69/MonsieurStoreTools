const data = [
  {
    marque: "Somfy",
    modele: "LT50",
    guides: [
      {
        titre: "Initialiser le moteur avec une télécommande",
        etapes: [
          "Appuyer 5 secondes sur le bouton PROG de la télécommande.",
          "Le moteur fait un va-et-vient : il est en mode programmation.",
          "Appuyer sur montée puis descente pour vérifier le sens.",
          "Si inversé, appuyer 5 secondes sur PROG.",
          "Appuyer brièvement sur PROG pour valider."
        ]
      },
      {
        titre: "Régler la fin de course haute",
        etapes: [
          "Monter le volet jusqu’à la position haute désirée.",
          "Appuyer brièvement sur PROG pour mémoriser.",
          "Le moteur confirme par un va-et-vient."
        ]
      },
      {
        titre: "Régler la fin de course basse",
        etapes: [
          "Descendre le volet jusqu’à la position basse désirée.",
          "Appuyer brièvement sur PROG pour mémoriser.",
          "Le moteur confirme par un va-et-vient."
        ]
      },
      {
        titre: "Copier une télécommande",
        etapes: [
          "Sur la télécommande déjà programmée, appuyer 2 secondes sur PROG.",
          "Le moteur fait un va-et-vient.",
          "Appuyer 1 seconde sur PROG de la nouvelle télécommande.",
          "Le moteur fait un va-et-vient : copie réussie."
        ]
      }
    ]
  },
  {
    marque: "Bubendorff",
    modele: "ID2",
    guides: [
      {
        titre: "Réinitialiser le moteur",
        etapes: [
          "Couper l’alimentation 2 secondes.",
          "Rétablir 7 secondes.",
          "Couper 2 secondes.",
          "Rétablir : le volet fait un va-et-vient.",
          "Le moteur est réinitialisé."
        ]
      }
    ]
  }
];