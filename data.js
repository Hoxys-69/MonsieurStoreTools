const data = [
  {
    marque: "Elero",
    modele: "RolTop-868",
    guides: [
      { titre: "Initialisation / Mise en service", etapes: [
        "Brancher le moteur RolTop-868 selon le schéma électrique.",
        "Programmer avec le boîtier de programmation ou via la télécommande radio.",
        "Vérifier le sens de rotation et corriger si nécessaire."
      ]},
      { titre: "Réglage fin de course haute", etapes: [
        "Monter le volet jusqu'à la position haute souhaitée.",
        "Appuyer sur PROG-FC jusqu’au va-et-vient du moteur.",
        "Valider avec STOP, le moteur confirme par un va-et-vient."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Descendre le volet jusqu'à la position basse souhaitée.",
        "Appuyer sur PROG-FC jusqu’au va-et-vient du moteur.",
        "Valider avec STOP, le moteur confirme par un va-et-vient."
      ]},
      { titre: "Ajouter une télécommande", etapes: [
        "Appuyer sur PROG de la télécommande principale jusqu’au va-et-vient.",
        "Dans les 5 secondes, appuyer sur PROG de la nouvelle télécommande.",
        "Le moteur confirme par un va-et-vient."
      ]}
    ]
  },
  {
    marque: "Becker",
    modele: "RO+",
    guides: [
      { titre: "Branchement", etapes: [
        "Raccorder le moteur selon le schéma fourni.",
        "Vérifier neutre et phase avant mise en route."
      ]},
      { titre: "Réglage automatique", etapes: [
        "Le moteur détecte automatiquement les fins de course.",
        "Valider les positions avec la télécommande ou l’inverseur."
      ]},
      { titre: "Suppression des fins de course", etapes: [
        "Reproduire la séquence via l’inverseur selon la notice Becker."
      ]}
    ]
  },
  {
    marque: "Becker",
    modele: "PR+",
    guides: [
      { titre: "Modes de fonctionnement", etapes: [
        "Automatique : réglage complet haut et bas.",
        "Semi-automatique : réglage séparé haut ou bas.",
        "Manuel : réglage pas à pas via l’inverseur."
      ]},
      { titre: "Effacement des réglages butées", etapes: [
        "Couper l’alimentation 5 secondes puis la remettre.",
        "Le moteur passe en mode apprentissage.",
        "Reprogrammer les fins de course."
      ]}
    ]
  },
  {
    marque: "Becker",
    modele: "PROF+",
    guides: [
      { titre: "Branchement et pré-affectation émetteur", etapes: [
        "Brancher le moteur en respectant le câblage neutre/phase.",
        "Appuyer sur la touche PROG pour associer un premier émetteur."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Descendre le volet en bas de course.",
        "Appuyer sur STOP pour mémoriser la position."
      ]},
      { titre: "Réglage fin de course haute", etapes: [
        "Monter le volet en haut de course.",
        "Appuyer sur STOP pour mémoriser la position."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le volet à la position intermédiaire souhaitée.",
        "Appuyer sur STOP 3 secondes pour mémoriser."
      ]},
      { titre: "Ajout / suppression d’émetteur", etapes: [
        "Appuyer 10 secondes sur PROG pour supprimer un émetteur.",
        "Associer un nouvel émetteur comme à l’initialisation."
      ]}
    ]
  },
  {
    marque: "Faher",
    modele: "Moteur Solaire",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Maintenir STOP jusqu’à 2 va-et-vient et 3 bips.",
        "Maintenir P1 jusqu’à va-et-vient + bip.",
        "La télécommande est associée."
      ]},
      { titre: "Réglage fin de course haute", etapes: [
        "Amener le volet en position haute.",
        "Appuyer sur HAUT + STOP jusqu’au va-et-vient.",
        "La position haute est enregistrée."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Amener le volet en position basse.",
        "Appuyer sur BAS + STOP jusqu’au va-et-vient.",
        "La position basse est enregistrée."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le volet à la position souhaitée.",
        "Maintenir STOP 3 secondes pour enregistrer."
      ]},
      { titre: "Suppression des fins de course", etapes: [
        "Appuyer sur BAS jusqu’au va-et-vient.",
        "Appuyer sur P2 jusqu’au double va-et-vient.",
        "Les fins de course sont supprimées."
      ]}
    ]
  },
  {
    marque: "Filtersun",
    modele: "Radio",
    guides: [
      { titre: "Remise à zéro", etapes: [
        "Charger le moteur 6 heures avant première utilisation.",
        "Appuyer sur P1 pour réinitialiser.",
        "Le moteur fait un va-et-vient."
      ]},
      { titre: "Définir sens de rotation", etapes: [
        "Appui bref HAUT si moteur à droite.",
        "Appui bref BAS si moteur à gauche."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener en position haute, appuyer STOP jusqu’au va-et-vient.",
        "Amener en position basse, appuyer STOP jusqu’au va-et-vient."
      ]},
      { titre: "Copie télécommande", etapes: [
        "Appuyer sur P2 avec télécommande d’origine.",
        "Appuyer sur P2 avec nouvelle télécommande.",
        "Le moteur confirme par va-et-vient."
      ]}
    ]
  },
  {
    marque: "Gaposa",
    modele: "Radio",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer sur PROG-TX de l’émetteur jusqu’à réaction du moteur.",
        "Valider le sens de rotation."
      ]},
      { titre: "Réglage fin de course haute", etapes: [
        "Monter le volet en position haute.",
        "Appuyer sur STOP pour mémoriser.",
        "Le moteur fait un va-et-vient."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Descendre le volet en position basse.",
        "Appuyer sur STOP pour mémoriser.",
        "Le moteur fait un va-et-vient."
      ]},
      { titre: "Changer sens de rotation", etapes: [
        "Maintenir PROG-TX jusqu’à réaction du moteur.",
        "Relâcher et appuyer sur STOP.",
        "Le moteur confirme par va-et-vient."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le volet à la position souhaitée.",
        "Maintenir HAUT + BAS jusqu’au va-et-vient.",
        "La position est enregistrée."
      ]}
    ]
  }
];