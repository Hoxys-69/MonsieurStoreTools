const data = [
  // --- Elero ---
  {
    marque: "Elero",
    modele: "RolTop-868",
    guides: [
      { titre: "Mise en service", etapes: [
        "Brancher le moteur et l’alimenter.",
        "Programmer avec la télécommande radio.",
        "Vérifier le sens de rotation et corriger si nécessaire."
      ]},
      { titre: "Réglage fin de course haute", etapes: [
        "Monter le volet en position haute souhaitée.",
        "Appuyer sur PROG-FC jusqu’au va-et-vient.",
        "Valider avec STOP."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Descendre le volet en position basse.",
        "Appuyer sur PROG-FC jusqu’au va-et-vient.",
        "Valider avec STOP."
      ]},
      { titre: "Ajouter télécommande", etapes: [
        "Appuyer sur PROG de la télécommande principale.",
        "Appuyer sur PROG de la nouvelle télécommande.",
        "Le moteur confirme par un va-et-vient."
      ]}
    ]
  },

  // --- Becker ---
  {
    marque: "Becker",
    modele: "RO+",
    guides: [
      { titre: "Branchement", etapes: [
        "Raccorder le moteur selon schéma électrique.",
        "Vérifier neutre et phase avant mise en route."
      ]},
      { titre: "Réglage automatique", etapes: [
        "Le moteur détecte automatiquement les fins de course.",
        "Valider avec l’inverseur ou télécommande."
      ]},
      { titre: "Suppression des fins de course", etapes: [
        "Effectuer la séquence d’effacement via l’inverseur (voir notice)."
      ]}
    ]
  },
  {
    marque: "Becker",
    modele: "PR+",
    guides: [
      { titre: "Modes disponibles", etapes: [
        "Automatique : réglage complet haut et bas.",
        "Semi-automatique : réglage séparé haut ou bas.",
        "Manuel : réglage pas à pas via l’inverseur."
      ]},
      { titre: "Effacement des réglages butées", etapes: [
        "Couper l’alimentation 5 secondes puis remettre.",
        "Le moteur passe en mode apprentissage.",
        "Reprogrammer les fins de course."
      ]}
    ]
  },
  {
    marque: "Becker",
    modele: "PROF+",
    guides: [
      { titre: "Branchement et pré-affectation", etapes: [
        "Brancher le moteur correctement.",
        "Appuyer sur PROG pour associer un premier émetteur."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Descendre le volet en bas de course.",
        "Appuyer sur STOP pour mémoriser."
      ]},
      { titre: "Réglage fin de course haute", etapes: [
        "Monter le volet en haut de course.",
        "Appuyer sur STOP pour mémoriser."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le volet à la position souhaitée.",
        "Appuyer sur STOP 3 secondes pour enregistrer."
      ]},
      { titre: "Gestion émetteurs", etapes: [
        "Appuyer 10 secondes sur PROG pour supprimer un émetteur.",
        "Associer un nouvel émetteur comme à l’initialisation."
      ]}
    ]
  },

  // --- Somfy ---
  {
    marque: "Somfy",
    modele: "LT50",
    guides: [
      { titre: "Initialiser le moteur", etapes: [
        "Appuyer 3 secondes sur PROG de la télécommande.",
        "Le moteur fait un va-et-vient.",
        "Tester montée/descente."
      ]},
      { titre: "Fin de course haute", etapes: [
        "Monter le volet à la position haute.",
        "Appuyer brièvement sur PROG pour mémoriser."
      ]},
      { titre: "Fin de course basse", etapes: [
        "Descendre le volet à la position basse.",
        "Appuyer brièvement sur PROG pour mémoriser."
      ]},
      { titre: "Copier télécommande", etapes: [
        "Appuyer 3s sur PROG (télécommande source).",
        "Appuyer 1s sur PROG (nouvelle télécommande).",
        "Va-et-vient : copie réussie."
      ]}
    ]
  },
  {
    marque: "Somfy",
    modele: "Oximo RTS",
    guides: [
      { titre: "Initialisation", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer simultanément sur montée + descente.",
        "Le moteur effectue un va-et-vient pour valider."
      ]},
      { titre: "Réglage fins de course manuelles", etapes: [
        "Amener le volet en bas et régler la vis de butée basse.",
        "Amener le volet en haut et régler la vis de butée haute.",
        "Tester plusieurs cycles pour ajuster."
      ]},
      { titre: "Réinitialisation", etapes: [
        "Couper l’alimentation 2s puis remettre 8s (3 fois).",
        "Le moteur fait un va-et-vient long.",
        "Reprogrammer depuis zéro."
      ]}
    ]
  },
  {
    marque: "Somfy",
    modele: "Oximo io",
    guides: [
      { titre: "Programmation", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer sur PROG d’une télécommande io déjà associée.",
        "Associer la nouvelle télécommande en PROG."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener le volet en haut, valider avec PROG.",
        "Amener le volet en bas, valider avec PROG."
      ]},
      { titre: "Position favorite (my)", etapes: [
        "Amener le volet à la position souhaitée.",
        "Maintenir MY/STOP jusqu’au va-et-vient.",
        "La position est mémorisée."
      ]},
      { titre: "Effacement mémoire", etapes: [
        "Appuyer 14s sur PROG.",
        "Le moteur fait 3 va-et-vient.",
        "Toutes les télécommandes sont effacées."
      ]}
    ]
  },
  {
    marque: "Somfy",
    modele: "RS100 Solaire io",
    guides: [
      { titre: "Mise en route simplifiée", etapes: [
        "Brancher la batterie et exposer le panneau solaire.",
        "Appuyer sur montée ou descente pour test.",
        "Faire un cycle complet pour auto-apprentissage."
      ]},
      { titre: "Ajout télécommande", etapes: [
        "Mettre le moteur en mode appairage.",
        "Appuyer sur PROG de la télécommande.",
        "Le moteur confirme par un va-et-vient."
      ]}
    ]
  },
  {
    marque: "Somfy",
    modele: "Solus PA (filaire)",
    guides: [
      { titre: "Branchement", etapes: [
        "Raccorder le moteur filaire selon schéma.",
        "Mettre sous tension et tester le sens de rotation."
      ]},
      { titre: "Réglage fins de course manuelles", etapes: [
        "Utiliser les deux vis de réglage (haute et basse).",
        "Monter et descendre le volet et ajuster chaque butée.",
        "Tester plusieurs cycles."
      ]}
    ]
  },

  // --- Bubendorff ---
  {
    marque: "Bubendorff",
    modele: "Voletronic Solar",
    guides: [
      { titre: "Initialisation", etapes: [
        "Couper et remettre l’alimentation (2s / 8s).",
        "Le moteur effectue un va-et-vient.",
        "Associer la télécommande en appuyant sur PROG."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Monter le volet et appuyer montée+descente.",
        "Descendre le volet et répéter montée+descente."
      ]},
      { titre: "Copie télécommande", etapes: [
        "Appuyer 3 secondes sur PROG de la télécommande source.",
        "Appuyer brièvement sur PROG de la nouvelle télécommande.",
        "Le moteur confirme par un va-et-vient."
      ]}
    ]
  },

  // --- Lakal ---
  {
    marque: "Lakal",
    modele: "Rolmotion 14mm",
    guides: [
      { titre: "Réglage fin de course haute", etapes: [
        "Monter le volet en haut.",
        "Maintenir ▼ pour mémoriser.",
        "Le moteur descend légèrement."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Descendre le volet en bas.",
        "Maintenir ▲ pour mémoriser.",
        "Le moteur monte légèrement."
      ]},
      { titre: "Effacement réglages", etapes: [
        "Placer le tablier à mi-hauteur.",
        "Couper puis remettre l’alimentation.",
        "Appuyer ▲ et ▼ pendant 6 secondes."
      ]}
    ]
  },

  // --- Gaviota ---
  {
    marque: "Gaviota",
    modele: "Elite-i",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer 1s sur P2, relâcher, puis 1s sur P2.",
        "Appuyer sur ▲ pour valider."
      ]},
      { titre: "Inverser sens rotation", etapes: [
        "Maintenir P2 jusqu’à réaction du moteur.",
        "Relâcher et appuyer sur STOP.",
        "Le moteur confirme par va-et-vient."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener en position haute, appuyer STOP.",
        "Amener en position basse, appuyer STOP."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le volet à la position souhaitée.",
        "Appuyer 3s sur STOP pour mémoriser."
      ]},
      { titre: "Effacement complet", etapes: [
        "Maintenir P2 ≥14s.",
        "Le moteur effectue 4 mouvements."
      ]}
    ]
  },
  {
    marque: "Gaviota",
    modele: "Elite-i BOX",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Mettre sous tension.",
        "Appuyer sur PROG de l’émetteur.",
        "Le moteur confirme par mouvement."
      ]},
      { titre: "Inversion sens rotation", etapes: [
        "Appuyer simultanément ▲ + ▼.",
        "Valider par STOP."
      ]},
      { titre: "Réglage fins de course électroniques", etapes: [
        "Descendre en bas → STOP.",
        "Monter en haut → STOP.",
        "Valider via l’émetteur."
      ]}
    ]
  },

  // --- Dooya ---
  {
    marque: "Dooya",
    modele: "DD1536H / DD1538H (solaire)",
    guides: [
      { titre: "Ajout télécommande", etapes: [
        "Appuyer 2s sur le bouton du boîtier solaire.",
        "Appuyer 2s sur STOP de la télécommande.",
        "Le moteur confirme par mouvement."
      ]},
      { titre: "Suppression télécommande", etapes: [
        "Appuyer 2s sur le bouton du boîtier solaire.",
        "Appuyer sur STOP jusqu’à confirmation.",
        "Le moteur fait un double mouvement."
      ]},
      { titre: "Changer sens de rotation", etapes: [
        "Appuyer simultanément ▲ + ▼ 2s.",
        "Le moteur confirme par mouvement."
      ]},
      { titre: "Réinitialisation usine", etapes: [
        "Appuyer 14s sur le bouton de programmation.",
        "Le moteur confirme par 4 mouvements."
      ]}
    ]
  },

  // --- Faher ---
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
        "Appuyer HAUT + STOP jusqu’au va-et-vient.",
        "La position haute est enregistrée."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Amener le volet en position basse.",
        "Appuyer BAS + STOP jusqu’au va-et-vient.",
        "La position basse est enregistrée."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le volet à la position souhaitée.",
        "Maintenir STOP 3s pour enregistrer."
      ]},
      { titre: "Suppression fins de course", etapes: [
        "Appuyer sur BAS jusqu’au va-et-vient.",
        "Appuyer sur P2 jusqu’au double va-et-vient."
      ]}
    ]
  },
  {
    marque: "Faher",
    modele: "Radio / NHK (secours manivelle)",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer sur P2 de la télécommande.",
        "Appuyer sur montée pour valider.",
        "Le moteur confirme par un va-et-vient."
      ]},
      { titre: "Suppression télécommande", etapes: [
        "Appuyer longuement sur P2 jusqu’au double mouvement.",
        "Toutes les télécommandes sont effacées."
      ]},
      { titre: "Utilisation NHK (manivelle)", etapes: [
        "Introduire la manivelle dans l’embout de secours.",
        "Tourner manuellement pour monter/descendre.",
        "Retirer la manivelle après retour du courant."
      ]}
    ]
  },

  // --- Filtersun ---
  {
    marque: "Filtersun",
    modele: "Radio",
    guides: [
      { titre: "Remise à zéro", etapes: [
        "Charger le moteur 6h avant utilisation.",
        "Appuyer sur P1 pour réinitialiser.",
        "Le moteur fait un va-et-vient."
      ]},
      { titre: "Définir sens rotation", etapes: [
        "Appui bref HAUT si moteur à droite.",
        "Appui bref BAS si moteur à gauche."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener en position haute, appuyer STOP.",
        "Amener en position basse, appuyer STOP."
      ]},
      { titre: "Copie télécommande", etapes: [
        "Appuyer sur P2 avec télécommande d’origine.",
        "Appuyer sur P2 avec nouvelle télécommande.",
        "Le moteur confirme par va-et-vient."
      ]}
    ]
  },

  // --- Gaposa ---
  {
    marque: "Gaposa",
    modele: "Radio",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer sur PROG-TX de l’émetteur.",
        "Valider le sens de rotation."
      ]},
      { titre: "Réglage fin de course haute", etapes: [
        "Monter le volet en position haute.",
        "Appuyer sur STOP pour mémoriser."
      ]},
      { titre: "Réglage fin de course basse", etapes: [
        "Descendre le volet en position basse.",
        "Appuyer sur STOP pour mémoriser."
      ]},
      { titre: "Changer sens rotation", etapes: [
        "Maintenir PROG-TX jusqu’à réaction du moteur.",
        "Relâcher et appuyer sur STOP."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le volet à la position souhaitée.",
        "Maintenir HAUT + BAS jusqu’au va-et-vient."
      ]}
    ]
  },

  // --- MS Intellium ---
  {
    marque: "MS",
    modele: "Intellium Radio Trad",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Appuyer 2x sur P2 de la télécommande.",
        "Appuyer sur montée pour valider.",
        "Le moteur confirme par deux va-et-vient."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Descendre en bas, appuyer Stop + ▼ 2s.",
        "Monter en haut, appuyer Stop + ▲ 2s."
      ]},
      { titre: "Position intermédiaire", etapes: [
        "Amener le store au point désiré.",
        "Appuyer sur P2 puis deux fois STOP."
      ]},
      { titre: "Copie télécommande", etapes: [
        "Appuyer 2x sur P2 de l’émetteur 1.",
        "Appuyer 1x sur P2 de l’émetteur 2."
      ]}
    ]
  },
  {
    marque: "MS",
    modele: "Intellium Radio Coffre",
    guides: [
      { titre: "Programmation fins de course", etapes: [
        "Descendre le store en bas, appuyer Stop + ▼ 2s.",
        "Monter en haut, maintenir ▲ 2s pour finaliser."
      ]},
      { titre: "Copie télécommande", etapes: [
        "Appuyer 2x sur P2 de l’émetteur 1.",
        "Appuyer 1x sur P2 de l’émetteur 2."
      ]}
    ]
  },
  {
    marque: "MS",
    modele: "Intellium Radio Solaire",
    guides: [
      { titre: "Appairage", etapes: [
        "Appuyer 2s sur bouton du panneau solaire.",
        "Appuyer 2s sur STOP de la télécommande.",
        "Le moteur confirme par deux va-et-vient."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Descendre le volet en bas, régler molette rouge.",
        "Monter le volet en haut, régler molette blanche."
      ]},
      { titre: "Reset complet", etapes: [
        "Maintenir bouton panneau solaire 14s.",
        "Attendre 4 clignotements rouges."
      ]}
    ]
  },

  // --- Elite ---
  {
    marque: "Elite",
    modele: "Box Store 2AF",
    guides: [
      { titre: "Mise en service", etapes: [
        "Brancher le moteur.",
        "Associer la télécommande via bouton PROG.",
        "Vérifier le sens de rotation."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener en position haute, appuyer STOP.",
        "Amener en position basse, appuyer STOP."
      ]}
    ]
  },
  {
    marque: "Elite",
    modele: "Verticaux 2AF Nexus",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Mettre sous tension.",
        "Appuyer sur PROG jusqu’à mouvement.",
        "Associer télécommande en appuyant STOP."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Monter en haut et appuyer STOP.",
        "Descendre en bas et appuyer STOP."
      ]}
    ]
  },
  {
    marque: "Elite",
    modele: "Store 2AF Monobloc",
    guides: [
      { titre: "Mise en service", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer sur PROG pour associer télécommande."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener en position haute, valider avec STOP.",
        "Amener en position basse, valider avec STOP."
      ]}
    ]
  },
  {
    marque: "Elite",
    modele: "FLASH (Desert, Iris, Ares, Kyma…)",
    guides: [
      { titre: "Appairage", etapes: [
        "Appuyer sur P2 de la télécommande.",
        "Appuyer sur montée pour valider.",
        "Le moteur confirme par mouvement."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Descendre jusqu’à la position basse, maintenir ▼.",
        "Monter en haut et valider avec ▲."
      ]},
      { titre: "Effacement mémoire", etapes: [
        "Maintenir P2 ≥14s.",
        "Le moteur confirme par 4 mouvements."
      ]}
    ]
  },

  // --- Rollo PV ---
  {
    marque: "Rollo",
    modele: "PV",
    guides: [
      { titre: "Reset complet", etapes: [
        "Maintenir bouton moteur jusqu’à 3 clignotements LED.",
        "Relâcher, le moteur se réinitialise.",
        "Reprogrammer les fins de course."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener en position haute, appuyer STOP.",
        "Amener en position basse, appuyer STOP."
      ]},
      { titre: "Position favorite", etapes: [
        "Amener le volet à la position désirée.",
        "Maintenir STOP 5s pour mémoriser."
      ]}
    ]
  },

  // --- Faber ---
  {
    marque: "Faber",
    modele: "Bliss Smartphone",
    guides: [
      { titre: "Ajout store via appli", etapes: [
        "Scanner le QR code du moteur dans l’application.",
        "Attribuer un nom et une pièce.",
        "Configurer via l’application mobile."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Ouvrir les paramètres de l’application.",
        "Monter/descendre le store.",
        "Valider la position haute et basse."
      ]},
      { titre: "Ajouter télécommande", etapes: [
        "Dans l’appli, sélectionner Ajouter télécommande.",
        "Appuyer sur PROG de la télécommande.",
        "Associer le moteur."
      ]}
    ]
  },

  // --- Nice ---
  {
    marque: "Nice",
    modele: "ERA MAT A (VR Kit ET30R/MA)",
    guides: [
      { titre: "Mise en service", etapes: [
        "Installer le moteur dans l’axe du volet.",
        "Raccorder au secteur en respectant le schéma.",
        "Vérifier le sens de rotation."
      ]},
      { titre: "Réglage fins de course manuelles", etapes: [
        "Descendre le volet en bas de course et régler la vis basse.",
        "Monter le volet en haut et régler la vis haute.",
        "Tester et affiner."
      ]},
      { titre: "Réinitialisation", etapes: [
        "Amener le tablier à mi-hauteur.",
        "Tourner simultanément les deux vis de 5 tours.",
        "Reprogrammer les fins de course."
      ]}
    ]
  },

  // --- Llaza ---
  {
    marque: "Llaza",
    modele: "Sélection",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Mettre le moteur sous tension.",
        "Appuyer 2s sur P2 de la télécommande.",
        "Appuyer sur montée pour valider."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Amener en position haute, appuyer STOP.",
        "Amener en position basse, appuyer STOP."
      ]},
      { titre: "Effacement mémoire", etapes: [
        "Maintenir P2 ≥14s.",
        "Le moteur confirme par 4 mouvements."
      ]}
    ]
  },
  {
    marque: "Llaza",
    modele: "E-ON PRO",
    guides: [
      { titre: "Appairage télécommande", etapes: [
        "Appuyer brièvement sur P2 du moteur.",
        "Appuyer sur P2 de la télécommande.",
        "Le moteur confirme par mouvement."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Descendre le volet en bas et maintenir ▼.",
        "Monter en haut et maintenir ▲ pour valider."
      ]},
      { titre: "Copie télécommande", etapes: [
        "Appuyer 2x sur P2 de l’émetteur source.",
        "Appuyer 1x sur P2 de l’émetteur cible."
      ]},
      { titre: "Suppression mémoire", etapes: [
        "Maintenir P2 du moteur ≥14s.",
        "Le moteur confirme par 4 mouvements."
      ]}
    ]
  },

  // --- Simu ---
  {
    marque: "Simu",
    modele: "T3.5 EHz DC Autosun 2",
    guides: [
      { titre: "Initialisation", etapes: [
        "Brancher le panneau solaire et la batterie.",
        "Appuyer sur PROG du moteur jusqu’au va-et-vient.",
        "Associer la télécommande en appuyant sur PROG."
      ]},
      { titre: "Réglage fins de course", etapes: [
        "Descendre le volet jusqu’à la position basse → STOP.",
        "Monter en haut → STOP."
      ]},
      { titre: "Ajout télécommande", etapes: [
        "Appuyer brièvement sur PROG du moteur.",
        "Appuyer sur PROG de la nouvelle télécommande.",
        "Le moteur confirme par mouvement."
      ]},
      { titre: "Reset complet", etapes: [
        "Maintenir PROG du moteur ≥14s.",
        "Le moteur fait 4 mouvements."
      ]}
    ]
  }
];