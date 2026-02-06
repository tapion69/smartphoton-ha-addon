# Changelog

## [2.0.0] - 2026-02-06

### 🎉 Refonte complète

#### Ajouté
- Auto-découverte MQTT automatique (plus de 100 entités par onduleur)
- Support multi-onduleurs (jusqu'à 3)
- Configuration complète via interface Home Assistant
- 3 onglets organisés (Monitoring, Configuration, Diagnostic)
- Support du protocole Voltronic complet (toutes les commandes)
- Énergies PV et Load (jour/mois/année)
- Paramètres QDOP (2nd output relay)
- Bouton synchronisation date/heure
- Polling configurable (rapide/lent)
- Node-RED embarqué (invisible pour l'utilisateur)

#### Supprimé
- Commandes LED (non utilisées par la plupart)
- Configuration manuelle MQTT
- Complexité de l'ancien système

#### Amélioré
- Code réduit de 79% (800 lignes vs 3800)
- Architecture modulaire et maintenable
- Parsing complet de toutes les réponses
- Gestion d'erreurs robuste
- Documentation complète

### Commandes supportées

**Lecture temps réel (5s) :**
- QPIGS, QPIGS2, QMOD, QPIWS

**Lecture config (5min) :**
- QPIRI, QPI, QID, QSID, QVFW, QVFW3, QFLAG
- QMN, QGMN, QT, QDOP, QBEQI
- QET, QEY, QEM, QED (énergies PV)
- QLT, QLY, QLM, QLD (énergies load)

**Écriture (modification) :**
- POP, PCP, PBT
- PBCV, PBDV, PBFT, PSDV, PCVV
- MNCHGC, MUCHGC, PBATMAXDISC
- PBCC, PBDC, PSDC, PCVT
- DAT (synchronisation date)

### Notes de migration

Si vous migrez depuis l'ancien système :
1. Sauvegarder votre configuration actuelle
2. Désinstaller l'ancien add-on
3. Installer la version 2.0.0
4. Configurer les ports série
5. Les entités seront recréées automatiquement

## [1.0.0] - Ancien système

Version originale (complexe, à refondre)
