const data = [
  // === Elero ===
  {
    marque: "Elero",
    modele: "RolTop-868",
    guides: [
      { 
        titre: "Mise en service", 
        etapes: [
          "Brancher le moteur et l’alimenter.",
          "Programmer avec la télécommande radio.",
          "Vérifier le sens de rotation et corriger si nécessaire."
        ],
        expert: [
          "Alimentation 230 V~ 50 Hz.",
          "Respecter le sens de rotation lors de l’appairage.",
          "Éviter les inverseurs maintenus avec commande radio."
        ]
      },
      { 
        titre: "Réglage fin de course haute", 
        etapes: [
          "Monter le volet en position haute souhaitée.",
          "Appuyer sur PROG-FC jusqu’au va-et-vient.",
          "Valider avec STOP."
        ],
        expert: [
          "Tolérance typique de butée : ±2 mm.",
          "Faire 2 cycles complets après réglage."
        ]
      },
      { 
        titre: "Réglage fin de course basse", 
        etapes: [
          "Descendre le volet en position basse.",
          "Appuyer sur PROG-FC jusqu’au va-et-vient.",
          "Valider avec STOP."
        ],
        expert: [
          "Éviter la compression des lames au sol.",
          "Contrôler l’équilibrage du tablier."
        ]
      },
      { 
        titre: "Ajouter télécommande", 
        etapes: [
          "Appuyer sur PROG de la télécommande principale.",
          "Appuyer sur PROG de la nouvelle télécommande.",
          "Le moteur confirme par un va-et-vient."
        ],
        expert: [
          "Portée radio indic. 10–20 m en intérieur selon environnement.",
          "Supprimer les émetteurs non utilisés pour la sécurité."
        ]
      }
    ]
  },

  // === Becker ===
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
          "Indice de protection typique IP44 (vérifier étiquette).",
          "Protection thermique intégrée : respecter temps de repos."
        ]
      },
      { 
        titre: "Réglage automatique", 
        etapes: [
          "Le moteur détecte automatiquement les fins de course.",
          "Valider avec l’inverseur ou télécommande."
        ],
        expert: [
          "Nécessite butées/arrêts compatibles.",
          "Effectuer 2 allers-retours pour apprentissage complet."
        ]
      },
      { 
        titre: "Suppression des fins de course", 
        etapes: [
          "Effectuer la séquence d’effacement via l’inverseur (voir notice)."
        ],
        expert: [
          "Après reset, refaire un cycle haut/bas complet."
        ]
      }
    ]
  },
  {
    marque: "Becker",
    modele: "PR+",
    guides: [
      { 
        titre: "Modes disponibles", 
        etapes: [
          "Automatique : réglage complet haut et bas.",
          "Semi-automatique : réglage séparé haut ou bas.",
          "Manuel : réglage pas à pas via l’inverseur."
        ],
        expert: [
          "Choisir le mode selon butées mécaniques/électroniques.",
          "Couper l’alimentation avant reconfiguration."
        ]
      },
      { 
        titre: "Effacement des réglages butées", 
        etapes: [
          "Couper l’alimentation 5 secondes puis remettre.",
          "Le moteur passe en mode apprentissage.",
          "Reprogrammer les fins de course."
        ],
        expert: [
          "Éviter les resets multiples.",
          "Contrôler l’absence de points durs."
        ]
      }
    ]
  },
  {
    marque: "Becker",
    modele: "PROF+",
    guides: [
      { 
        titre: "Branchement et pré-affectation", 
        etapes: [
          "Brancher le moteur correctement.",
          "Appuyer sur PROG pour associer un premier émetteur."
        ],
        expert: [
          "Respecter la section de câble recommandée.",
          "Prévoir parafoudre en site exposé."
        ]
      },
      { 
        titre: "Réglage fin de course basse", 
        etapes: [
          "Descendre le volet en bas de course.",
          "Appuyer sur STOP pour mémoriser."
        ],
        expert: [
          "Ne pas forcer sur le seuil/coffre.",
          "Tester l’arrêt sécurité."
        ]
      },
      { 
        titre: "Réglage fin de course haute", 
        etapes: [
          "Monter le volet en haut de course.",
          "Appuyer sur STOP pour mémoriser."
        ],
        expert: [
          "Éviter l’écrasement en coffre.",
          "Contrôler l’alignement de l’axe."
        ]
      },
      { 
        titre: "Position intermédiaire", 
        etapes: [
          "Amener le volet à la position souhaitée.",
          "Appuyer sur STOP 3 secondes pour enregistrer."
        ],
        expert: [
          "Réinscriptible sans toucher aux FDC.",
          "Informer l’utilisateur de l’appel de position."
        ]
      },
      { 
        titre: "Gestion émetteurs", 
        etapes: [
          "Appuyer 10 secondes sur PROG pour supprimer un émetteur.",
          "Associer un nouvel émetteur comme à l’initialisation."
        ],
        expert: [
          "Limiter le nombre d’émetteurs pour éviter conflits.",
          "Documenter les canaux pour maintenance."
        ]
      }
    ]
  },

  // === Somfy ===
  {
    marque: "Somfy",
    modele: "LT50",
    guides: [
      { 
        titre: "Initialisation", 
        etapes: [
          "Appuyer 3 secondes sur PROG de la télécommande.",
          "Le moteur fait un va-et-vient.",
          "Tester montée/descente."
        ],
        expert: [
          "Éviter l’appairage près d’autres moteurs (parasites).",
          "Ne pas utiliser d’inverseur maintenu en parallèle radio."
        ]
      },
      { 
        titre: "Fin de course haute", 
        etapes: [
          "Monter le volet à la position haute.",
          "Appuyer brièvement sur PROG pour mémoriser."
        ],
        expert: [
          "Toujours valider par un cycle complet.",
          "Contrôler l’absence d’obstacle."
        ]
      },
      { 
        titre: "Fin de course basse", 
        etapes: [
          "Descendre le volet à la position basse.",
          "Appuyer brièvement sur PROG pour mémoriser."
        ],
        expert: [
          "Ne pas comprimer le tablier au sol.",
          "Ajuster l’attache si besoin."
        ]
      },
      { 
        titre: "Copier télécommande", 
        etapes: [
          "Appuyer 3s sur PROG (télécommande source).",
          "Appuyer 1s sur PROG (nouvelle télécommande).",
          "Va-et-vient : copie réussie."
        ],
        expert: [
          "Supprimer les anciens émetteurs inutiles."
        ]
      }
    ]
  },
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
          "Protection thermique : arrêt auto si usage prolongé.",
          "Appairer à courte distance."
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
          "Ajuster progressivement les vis (ne pas forcer).",
          "Lubrifier les guides si point dur."
        ]
      },
      { 
        titre: "Réinitialisation", 
        etapes: [
          "Couper l’alimentation 2s puis remettre 8s (3 fois).",
          "Le moteur fait un va-et-vient long.",
          "Reprogrammer depuis zéro."
        ],
        expert: [
          "Après reset, réassocier toutes les télécommandes."
        ]
      }
    ]
  },
  {
    marque: "Somfy",
    modele: "Oximo io",
    guides: [
      { 
        titre: "Programmation", 
        etapes: [
          "Mettre le moteur sous tension.",
          "Appuyer sur PROG d’une télécommande io déjà associée.",
          "Associer la nouvelle télécommande en PROG."
        ],
        expert: [
          "Réseau io : tenir compte de la topologie radio.",
          "Sécuriser le canal maître."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Amener le volet en haut, valider avec PROG.",
          "Amener le volet en bas, valider avec PROG."
        ],
        expert: [
          "Terminer par un cycle complet.",
          "Éviter l’apprentissage par temps de gel."
        ]
      },
      { 
        titre: "Position favorite (my)", 
        etapes: [
          "Amener le volet à la position souhaitée.",
          "Maintenir MY/STOP jusqu’au va-et-vient."
        ],
        expert: [
          "Position MY liée à chaque émetteur.",
          "Reprogrammable sans toucher aux FDC."
        ]
      },
      { 
        titre: "Effacement mémoire", 
        etapes: [
          "Appuyer 14s sur PROG.",
          "Le moteur fait 3 va-et-vient.",
          "Toutes les télécommandes sont effacées."
        ],
        expert: [
          "Isoler le moteur pour éviter les effacements multiples."
        ]
      }
    ]
  },
  {
    marque: "Somfy",
    modele: "RS100 Solaire io",
    guides: [
      { 
        titre: "Mise en route simplifiée", 
        etapes: [
          "Brancher la batterie et exposer le panneau solaire.",
          "Appuyer sur montée ou descente pour test.",
          "Faire un cycle complet pour auto-apprentissage."
        ],
        expert: [
          "Orienter le panneau sud (30–45°).",
          "Éviter les ombrages permanents."
        ]
      },
      { 
        titre: "Ajout télécommande", 
        etapes: [
          "Mettre le moteur en mode appairage.",
          "Appuyer sur PROG de la télécommande.",
          "Le moteur confirme par un va-et-vient."
        ],
        expert: [
          "Batterie >30% avant programmation.",
          "Télécommande à <1 m du moteur."
        ]
      }
    ]
  },
  {
    marque: "Somfy",
    modele: "Solus PA (filaire)",
    guides: [
      { 
        titre: "Branchement", 
        etapes: [
          "Raccorder le moteur filaire selon schéma.",
          "Mettre sous tension et tester le sens de rotation."
        ],
        expert: [
          "Inverseur maintenu autorisé uniquement en filaire.",
          "Respecter temps de refroidissement (thermique)."
        ]
      },
      { 
        titre: "Réglage fins de course manuelles", 
        etapes: [
          "Utiliser les deux vis de réglage (haute et basse).",
          "Monter/descendre et ajuster chaque butée.",
          "Tester plusieurs cycles."
        ],
        expert: [
          "Ne pas forcer en butée.",
          "Adapter selon type de coulisses."
        ]
      }
    ]
  },

  // === Bubendorff ===
  {
    marque: "Bubendorff",
    modele: "Voletronic Solar",
    guides: [
      { 
        titre: "Initialisation", 
        etapes: [
          "Couper et remettre l’alimentation (2s / 8s).",
          "Le moteur effectue un va-et-vient.",
          "Associer la télécommande en appuyant sur PROG."
        ],
        expert: [
          "Vérifier charge initiale batterie.",
          "Limiter les resets pour préserver la batterie."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Monter le volet et appuyer montée+descente.",
          "Descendre le volet et répéter montée+descente."
        ],
        expert: [
          "Assurer un déplacement fluide sans points durs.",
          "Butées compatibles requises."
        ]
      },
      { 
        titre: "Copie télécommande", 
        etapes: [
          "Appuyer 3 secondes sur PROG (source).",
          "Appuyer brièvement sur PROG (nouvelle).",
          "Va-et-vient de confirmation."
        ],
        expert: [
          "Limiter le nombre d’émetteurs par axe.",
          "Tracer les émetteurs actifs."
        ]
      }
    ]
  },

  // === Lakal ===
  {
    marque: "Lakal",
    modele: "Rolmotion 14mm",
    guides: [
      { 
        titre: "Réglage fin de course haute", 
        etapes: [
          "Monter le volet en haut.",
          "Maintenir ▼ pour mémoriser.",
          "Le moteur descend légèrement."
        ],
        expert: [
          "Valider par 1–2 cycles complets.",
          "Éviter heurt coffre."
        ]
      },
      { 
        titre: "Réglage fin de course basse", 
        etapes: [
          "Descendre le volet en bas.",
          "Maintenir ▲ pour mémoriser.",
          "Le moteur monte légèrement."
        ],
        expert: [
          "Ne pas écraser les lames au sol.",
          "Ajuster si seuil irrégulier."
        ]
      },
      { 
        titre: "Effacement réglages", 
        etapes: [
          "Placer le tablier à mi-hauteur.",
          "Couper puis remettre l’alimentation.",
          "Appuyer ▲ et ▼ pendant 6 secondes."
        ],
        expert: [
          "Refaire apprentissage complet après reset."
        ]
      }
    ]
  },

  // === Gaviota ===
  {
    marque: "Gaviota",
    modele: "Elite-i",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Mettre le moteur sous tension.",
          "Appuyer 1s sur P2, relâcher, puis 1s sur P2.",
          "Appuyer sur ▲ pour valider."
        ],
        expert: [
          "Coffres métalliques peuvent réduire la portée : tester à proximité."
        ]
      },
      { 
        titre: "Inverser sens rotation", 
        etapes: [
          "Maintenir P2 jusqu’à réaction du moteur.",
          "Relâcher et appuyer sur STOP."
        ],
        expert: [
          "Toujours vérifier le sens après intervention mécanique."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Amener en position haute, appuyer STOP.",
          "Amener en position basse, appuyer STOP."
        ],
        expert: [
          "Valider par 2 cycles automatiques."
        ]
      },
      { 
        titre: "Position intermédiaire", 
        etapes: [
          "Amener la position souhaitée.",
          "Appuyer 3s sur STOP pour mémoriser."
        ],
        expert: [
          "N’affecte pas les FDC."
        ]
      },
      { 
        titre: "Effacement complet", 
        etapes: [
          "Maintenir P2 ≥14s.",
          "Le moteur effectue 4 mouvements."
        ],
        expert: [
          "Irréversible : prévoir réappairage."
        ]
      }
    ]
  },
  {
    marque: "Gaviota",
    modele: "Elite-i BOX",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Mettre sous tension.",
          "Appuyer sur PROG de l’émetteur.",
          "Le moteur confirme par mouvement."
        ],
        expert: [
          "Éviter interférences RF pendant l’appairage."
        ]
      },
      { 
        titre: "Inversion sens rotation", 
        etapes: [
          "Appuyer simultanément ▲ + ▼.",
          "Valider par STOP."
        ],
        expert: [
          "Revalider les FDC après inversion."
        ]
      },
      { 
        titre: "Réglage fins de course électroniques", 
        etapes: [
          "Descendre en bas → STOP.",
          "Monter en haut → STOP.",
          "Valider via l’émetteur."
        ],
        expert: [
          "Nécessite un tablier sans points durs."
        ]
      }
    ]
  },

  // === Dooya ===
  {
    marque: "Dooya",
    modele: "DD1536H / DD1538H (solaire)",
    guides: [
      { 
        titre: "Ajout télécommande", 
        etapes: [
          "Appuyer 2s sur le bouton du boîtier solaire.",
          "Appuyer 2s sur STOP de la télécommande.",
          "Le moteur confirme par mouvement."
        ],
        expert: [
          "Charger le pack avant programmation.",
          "Respecter polarité panneau/batterie."
        ]
      },
      { 
        titre: "Suppression télécommande", 
        etapes: [
          "Appuyer 2s sur le bouton du boîtier solaire.",
          "Appuyer sur STOP jusqu’à confirmation.",
          "Le moteur fait un double mouvement."
        ],
        expert: [
          "Tester chaque émetteur après suppression."
        ]
      },
      { 
        titre: "Changer sens de rotation", 
        etapes: [
          "Appuyer simultanément ▲ + ▼ 2s.",
          "Le moteur confirme par mouvement."
        ],
        expert: [
          "Tester avec tablier partiellement ouvert."
        ]
      },
      { 
        titre: "Réinitialisation usine", 
        etapes: [
          "Appuyer 14s sur le bouton de programmation.",
          "Le moteur confirme par 4 mouvements."
        ],
        expert: [
          "Refaire tous les appairages après reset."
        ]
      }
    ]
  },

  // === Faher ===
  {
    marque: "Faher",
    modele: "Moteur Solaire",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Maintenir STOP jusqu’à 2 va-et-vient et 3 bips.",
          "Maintenir P1 jusqu’à va-et-vient + bip."
        ],
        expert: [
          "Vérifier charge batterie avant programmation.",
          "Limiter le nombre d’émetteurs."
        ]
      },
      { 
        titre: "Réglage fin de course haute", 
        etapes: [
          "Amener le volet en position haute.",
          "Appuyer HAUT + STOP jusqu’au va-et-vient."
        ],
        expert: [
          "Ne pas mémoriser sous contrainte mécanique."
        ]
      },
      { 
        titre: "Réglage fin de course basse", 
        etapes: [
          "Amener le volet en position basse.",
          "Appuyer BAS + STOP jusqu’au va-et-vient."
        ],
        expert: [
          "Affleurer le sol sans compression."
        ]
      },
      { 
        titre: "Position intermédiaire", 
        etapes: [
          "Amener la position souhaitée.",
          "Maintenir STOP 3s pour enregistrer."
        ],
        expert: [
          "Réinscriptible à volonté."
        ]
      },
      { 
        titre: "Suppression fins de course", 
        etapes: [
          "Appuyer sur BAS jusqu’au va-et-vient.",
          "Appuyer sur P2 jusqu’au double va-et-vient."
        ],
        expert: [
          "Refaire un cycle complet ensuite."
        ]
      }
    ]
  },
  {
    marque: "Faher",
    modele: "Radio / NHK (secours manivelle)",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Mettre le moteur sous tension.",
          "Appuyer sur P2 de la télécommande.",
          "Appuyer sur montée pour valider."
        ],
        expert: [
          "Étiqueter le canal maître."
        ]
      },
      { 
        titre: "Suppression télécommande", 
        etapes: [
          "Appuyer longuement sur P2 jusqu’au double mouvement."
        ],
        expert: [
          "Isoler le moteur lors de l’effacement."
        ]
      },
      { 
        titre: "Utilisation NHK (manivelle)", 
        etapes: [
          "Introduire la manivelle dans l’embout de secours.",
          "Tourner manuellement pour monter/descendre."
        ],
        expert: [
          "Ne pas forcer en butée."
        ]
      }
    ]
  },

  // === Filtersun ===
  {
    marque: "Filtersun",
    modele: "Radio",
    guides: [
      { 
        titre: "Remise à zéro", 
        etapes: [
          "Charger le moteur 6h avant utilisation.",
          "Appuyer sur P1 pour réinitialiser.",
          "Va-et-vient de confirmation."
        ],
        expert: [
          "Faire un cycle complet après charge pour calibrage."
        ]
      },
      { 
        titre: "Définir sens rotation", 
        etapes: [
          "Appui bref HAUT si moteur à droite.",
          "Appui bref BAS si moteur à gauche."
        ],
        expert: [
          "Confirmer par un cycle de test."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Amener en position haute, appuyer STOP.",
          "Amener en position basse, appuyer STOP."
        ],
        expert: [
          "Éviter frottements anormaux pendant apprentissage."
        ]
      },
      { 
        titre: "Copie télécommande", 
        etapes: [
          "Appuyer sur P2 avec télécommande d’origine.",
          "Appuyer sur P2 avec nouvelle télécommande."
        ],
        expert: [
          "Limiter le nombre d’émetteurs."
        ]
      }
    ]
  },

  // === Gaposa ===
  {
    marque: "Gaposa",
    modele: "Radio",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Mettre le moteur sous tension.",
          "Appuyer sur PROG-TX de l’émetteur.",
          "Valider le sens de rotation."
        ],
        expert: [
          "Tester à courte distance d’abord."
        ]
      },
      { 
        titre: "Réglage fin de course haute", 
        etapes: [
          "Monter le volet en position haute.",
          "Appuyer sur STOP pour mémoriser."
        ],
        expert: [
          "Ne pas mémoriser en contrainte."
        ]
      },
      { 
        titre: "Réglage fin de course basse", 
        etapes: [
          "Descendre le volet en position basse.",
          "Appuyer sur STOP pour mémoriser."
        ],
        expert: [
          "Vérifier planéité du seuil."
        ]
      },
      { 
        titre: "Changer sens rotation", 
        etapes: [
          "Maintenir PROG-TX jusqu’à réaction du moteur.",
          "Relâcher et appuyer sur STOP."
        ],
        expert: [
          "Revalider les FDC après inversion."
        ]
      },
      { 
        titre: "Position intermédiaire", 
        etapes: [
          "Amener la position souhaitée.",
          "Maintenir HAUT + BAS jusqu’au va-et-vient."
        ],
        expert: [
          "Informer l’utilisateur de l’appel de position."
        ]
      }
    ]
  },

  // === MS Intellium ===
  {
    marque: "MS",
    modele: "Intellium Radio Trad",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Appuyer 2x sur P2 de la télécommande.",
          "Appuyer sur montée pour valider."
        ],
        expert: [
          "Éviter l’appairage simultané sur plusieurs axes.",
          "Conserver le canal maître."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Descendre en bas, appuyer Stop + ▼ 2s.",
          "Monter en haut, appuyer Stop + ▲ 2s."
        ],
        expert: [
          "Terminer par un aller-retour complet."
        ]
      },
      { 
        titre: "Position intermédiaire", 
        etapes: [
          "Amener le store au point désiré.",
          "Appuyer sur P2 puis deux fois STOP."
        ],
        expert: [
          "N’altère pas les FDC enregistrées."
        ]
      },
      { 
        titre: "Copie télécommande", 
        etapes: [
          "Appuyer 2x sur P2 de l’émetteur 1.",
          "Appuyer 1x sur P2 de l’émetteur 2."
        ],
        expert: [
          "Tenir un registre des émetteurs."
        ]
      }
    ]
  },
  {
    marque: "MS",
    modele: "Intellium Radio Coffre",
    guides: [
      { 
        titre: "Programmation fins de course", 
        etapes: [
          "Descendre le store en bas, appuyer Stop + ▼ 2s.",
          "Monter en haut, maintenir ▲ 2s pour finaliser."
        ],
        expert: [
          "Valider sur 2 cycles après réglage."
        ]
      },
      { 
        titre: "Copie télécommande", 
        etapes: [
          "Appuyer 2x sur P2 de l’émetteur 1.",
          "Appuyer 1x sur P2 de l’émetteur 2."
        ],
        expert: [
          "Limiter le nombre d’émetteurs par axe."
        ]
      }
    ]
  },
  {
    marque: "MS",
    modele: "Intellium Radio Solaire",
    guides: [
      { 
        titre: "Appairage", 
        etapes: [
          "Appuyer 2s sur bouton du panneau solaire.",
          "Appuyer 2s sur STOP de la télécommande."
        ],
        expert: [
          "Programmer avec batterie suffisamment chargée."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Descendre le volet en bas, régler molette rouge.",
          "Monter le volet en haut, régler molette blanche."
        ],
        expert: [
          "Vérifier le sens de rotation avant réglage."
        ]
      },
      { 
        titre: "Reset complet", 
        etapes: [
          "Maintenir bouton panneau solaire 14s.",
          "Attendre 4 clignotements rouges."
        ],
        expert: [
          "Refaire FDC + appairages après reset."
        ]
      }
    ]
  },

  // === Elite ===
  {
    marque: "Elite",
    modele: "Box Store 2AF",
    guides: [
      { 
        titre: "Mise en service", 
        etapes: [
          "Brancher le moteur.",
          "Associer la télécommande via bouton PROG.",
          "Vérifier le sens de rotation."
        ],
        expert: [
          "Stabiliser l’alimentation pendant l’appairage."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Amener en position haute, appuyer STOP.",
          "Amener en position basse, appuyer STOP."
        ],
        expert: [
          "Deux cycles d’apprentissage recommandés."
        ]
      }
    ]
  },
  {
    marque: "Elite",
    modele: "Verticaux 2AF Nexus",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Mettre sous tension.",
          "Appuyer sur PROG jusqu’à mouvement.",
          "Associer télécommande en appuyant STOP."
        ],
        expert: [
          "Réduire les sources d’interférences RF lors de l’appairage."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Monter en haut et appuyer STOP.",
          "Descendre en bas et appuyer STOP."
        ],
        expert: [
          "Tester pluie/vent si capteurs présents."
        ]
      }
    ]
  },
  {
    marque: "Elite",
    modele: "Store 2AF Monobloc",
    guides: [
      { 
        titre: "Mise en service", 
        etapes: [
          "Mettre le moteur sous tension.",
          "Appuyer sur PROG pour associer télécommande."
        ],
        expert: [
          "Identifier le canal maître pour maintenance."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Amener en position haute, valider avec STOP.",
          "Amener en position basse, valider avec STOP."
        ],
        expert: [
          "Contrôler les efforts du store aux FDC."
        ]
      }
    ]
  },
  {
    marque: "Elite",
    modele: "FLASH (Desert, Iris, Ares, Kyma…)",
    guides: [
      { 
        titre: "Appairage", 
        etapes: [
          "Appuyer sur P2 de la télécommande.",
          "Appuyer sur montée pour valider."
        ],
        expert: [
          "Noter la référence de la toile/mécanisme associé."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Descendre jusqu’à la position basse, maintenir ▼.",
          "Monter en haut et valider avec ▲."
        ],
        expert: [
          "Vérifier tension de toile (stores)."
        ]
      },
      { 
        titre: "Effacement mémoire", 
        etapes: [
          "Maintenir P2 ≥14s.",
          "Le moteur confirme par 4 mouvements."
        ],
        expert: [
          "Prévoir réappairage après effacement."
        ]
      }
    ]
  },

  // === Rollo PV ===
  {
    marque: "Rollo",
    modele: "PV",
    guides: [
      { 
        titre: "Reset complet", 
        etapes: [
          "Maintenir bouton moteur jusqu’à 3 clignotements LED.",
          "Relâcher, le moteur se réinitialise."
        ],
        expert: [
          "Assurer alimentation stable pendant la procédure."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Amener en position haute → STOP.",
          "Amener en position basse → STOP."
        ],
        expert: [
          "Faire 2 cycles de validation."
        ]
      },
      { 
        titre: "Position favorite", 
        etapes: [
          "Amener la position désirée.",
          "Maintenir STOP 5s pour mémoriser."
        ],
        expert: [
          "Position favorite liée à l’émetteur utilisé."
        ]
      }
    ]
  },

  // === Faber ===
  {
    marque: "Faber",
    modele: "Bliss Smartphone",
    guides: [
      { 
        titre: "Ajout store via appli", 
        etapes: [
          "Scanner le QR code du moteur dans l’application.",
          "Attribuer un nom et une pièce.",
          "Configurer via l’application mobile."
        ],
        expert: [
          "Vérifier Wi‑Fi/BT requis (selon version)."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Ouvrir les paramètres de l’application.",
          "Monter/descendre le store.",
          "Valider la position haute et basse."
        ],
        expert: [
          "Sauvegarder la configuration dans le cloud si dispo."
        ]
      },
      { 
        titre: "Ajouter télécommande", 
        etapes: [
          "Dans l’appli, sélectionner Ajouter télécommande.",
          "Appuyer sur PROG de la télécommande.",
          "Associer le moteur."
        ],
        expert: [
          "Éviter le multi-appairage non contrôlé."
        ]
      }
    ]
  },

  // === Nice ===
  {
    marque: "Nice",
    modele: "ERA MAT A (VR Kit ET30R/MA)",
    guides: [
      { 
        titre: "Mise en service", 
        etapes: [
          "Installer le moteur dans l’axe du volet.",
          "Raccorder au secteur en respectant le schéma.",
          "Vérifier le sens de rotation."
        ],
        expert: [
          "Respecter section de câble et protections."
        ]
      },
      { 
        titre: "Réglage fins de course manuelles", 
        etapes: [
          "Descendre le volet en bas et régler la vis basse.",
          "Monter le volet en haut et régler la vis haute.",
          "Tester et affiner."
        ],
        expert: [
          "Ne pas serrer excessivement les vis de butées."
        ]
      },
      { 
        titre: "Réinitialisation", 
        etapes: [
          "Amener le tablier à mi-hauteur.",
          "Tourner simultanément les deux vis de 5 tours.",
          "Reprogrammer les fins de course."
        ],
        expert: [
          "Procédure à faire tablier sans obstacle."
        ]
      }
    ]
  },

  // === Llaza ===
  {
    marque: "Llaza",
    modele: "Sélection",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Mettre le moteur sous tension.",
          "Appuyer 2s sur P2 de la télécommande.",
          "Appuyer sur montée pour valider."
        ],
        expert: [
          "Télécommande proche du moteur lors de l’appairage."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Amener en position haute → STOP.",
          "Amener en position basse → STOP."
        ],
        expert: [
          "Vérifier absence de points durs."
        ]
      },
      { 
        titre: "Effacement mémoire", 
        etapes: [
          "Maintenir P2 ≥14s.",
          "Le moteur confirme par 4 mouvements."
        ],
        expert: [
          "Prévoir réappairage complet après effacement."
        ]
      }
    ]
  },
  {
    marque: "Llaza",
    modele: "E-ON PRO",
    guides: [
      { 
        titre: "Appairage télécommande", 
        etapes: [
          "Appuyer brièvement sur P2 du moteur.",
          "Appuyer sur P2 de la télécommande."
        ],
        expert: [
          "Ne pas maintenir P2 trop longtemps (risque reset)."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Descendre en bas et maintenir ▼.",
          "Monter en haut et maintenir ▲ pour valider."
        ],
        expert: [
          "Ajuster par petits incréments."
        ]
      },
      { 
        titre: "Copie télécommande", 
        etapes: [
          "Appuyer 2x sur P2 de l’émetteur source.",
          "Appuyer 1x sur P2 de l’émetteur cible."
        ],
        expert: [
          "Limiter les copies inutiles."
        ]
      },
      { 
        titre: "Suppression mémoire", 
        etapes: [
          "Maintenir P2 du moteur ≥14s.",
          "Le moteur confirme par 4 mouvements."
        ],
        expert: [
          "Irréversible : planifier le réappairage."
        ]
      }
    ]
  },

  // === Simu ===
  {
    marque: "Simu",
    modele: "T3.5 EHz DC Autosun 2",
    guides: [
      { 
        titre: "Initialisation", 
        etapes: [
          "Brancher le panneau solaire et la batterie.",
          "Appuyer sur PROG du moteur jusqu’au va-et-vient.",
          "Associer la télécommande en appuyant sur PROG."
        ],
        expert: [
          "Vérifier polarité panneau/batterie.",
          "Charger le pack avant apprentissage prolongé."
        ]
      },
      { 
        titre: "Réglage fins de course", 
        etapes: [
          "Descendre jusqu’à la position basse → STOP.",
          "Monter en haut → STOP."
        ],
        expert: [
          "Deux cycles pour finaliser l’auto-apprentissage."
        ]
      },
      { 
        titre: "Ajout télécommande", 
        etapes: [
          "Appuyer brièvement sur PROG du moteur.",
          "Appuyer sur PROG de la nouvelle télécommande."
        ],
        expert: [
          "Noter l’ID émetteur pour maintenance."
        ]
      },
      { 
        titre: "Reset complet", 
        etapes: [
          "Maintenir PROG du moteur ≥14s.",
          "Le moteur fait 4 mouvements."
        ],
        expert: [
          "Refaire FDC + appairages après reset."
        ]
      }
    ]
  }
];