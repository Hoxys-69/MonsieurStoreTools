const data = [
  {
    marque: "Somfy",
    modele: "Oximo RTS",
    guides: [
      { 
        titre: "Initialisation", 
        etapes: [
          "Mettre le moteur sous tension.",
          "Appuyer simultanément sur montée + descente.",
          "Le moteur effectue un va-et-vient pour valider."
        ],
        expert: [
          "Couple nominal : 10 Nm",
          "Vitesse de rotation : 17 tr/min",
          "Protection thermique : arrêt automatique après 4 min",
          "Compatible uniquement avec commandes RTS"
        ]
      },
      { 
        titre: "Réglage fins de course manuelles", 
        etapes: [
          "Amener le volet en bas et régler la vis de butée basse.",
          "Amener le volet en haut et régler la vis de butée haute.",
          "Tester plusieurs cycles pour ajuster."
        ],
        expert: [
          "Précision de réglage : ±2 mm",
          "Durée max de course : 4 minutes",
          "Réglage manuel par séquence électrique"
        ]
      }
    ]
  },
  {
    marque: "Becker",
    modele: "RO+",
    guides: [
      { 
        titre: "Branchement", 
        etapes: [
          "Raccorder le moteur selon schéma électrique.",
          "Vérifier neutre et phase avant mise en route."
        ],
        expert: [
          "Indice de protection IP44",
          "Cycle de fonctionnement limité par protection thermique"
        ]
      },
      { 
        titre: "Réglage automatique", 
        etapes: [
          "Le moteur détecte automatiquement les fins de course.",
          "Valider avec l’inverseur ou télécommande."
        ],
        expert: [
          "Nécessite butées et arrêts tablier compatibles",
          "Effectuer 2 allers-retours pour apprentissage complet"
        ]
      }
    ]
  }
];