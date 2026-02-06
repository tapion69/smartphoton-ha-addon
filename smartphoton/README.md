# 🔌 Voltronic MQTT Add-on pour Home Assistant

Add-on Home Assistant pour gérer des onduleurs Voltronic (Axpert MAX, VMIV, MKSIV) avec auto-découverte MQTT complète.

## ✨ Fonctionnalités

- 🔄 **Multi-onduleurs** : Support jusqu'à 3 onduleurs simultanément
- 🚀 **Plug & Play** : Auto-découverte MQTT - toutes les entités apparaissent automatiquement
- 📊 **Monitoring complet** : Plus de 100 entités par onduleur (tensions, courants, puissances, énergies)
- ⚙️ **Paramètres modifiables** : Modification directe depuis Home Assistant
- 🎯 **3 onglets organisés** : Monitoring, Configuration, Diagnostic
- ⚡ **Temps réel** : Mise à jour toutes les 5 secondes
- 📈 **Historiques énergétiques** : Production solaire et consommation (jour/mois/année)

## 📋 Prérequis

- Home Assistant avec Supervisor
- Mosquitto MQTT Broker (add-on)
- Onduleur(s) Voltronic connecté(s) en USB/Série

## 🛠️ Installation

### Méthode 1 : Via le repository GitHub (recommandé)

1. Dans Home Assistant, aller dans **Supervisor** → **Add-on Store**
2. Cliquer sur le menu (⋮) en haut à droite → **Repositories**
3. Ajouter ce repository : `https://github.com/VOTRE-USERNAME/voltronic-mqtt-addon`
4. Trouver "Voltronic MQTT" dans la liste et cliquer sur **Install**

### Méthode 2 : Installation locale

1. Créer le dossier `addon_configs/voltronic-mqtt/` dans votre config HA
2. Copier tous les fichiers de cet add-on dedans
3. Redémarrer Supervisor
4. L'add-on apparaîtra dans le store local

## ⚙️ Configuration

### Configuration de base

```yaml
serial_port_1: "/dev/ttyUSB0"      # Port série onduleur 1 (OBLIGATOIRE)
serial_port_2: ""                  # Port série onduleur 2 (optionnel)
serial_port_3: ""                  # Port série onduleur 3 (optionnel)
mqtt_broker: "core-mosquitto"      # Adresse du broker MQTT
mqtt_port: 1883                    # Port MQTT
mqtt_user: ""                      # Utilisateur MQTT (optionnel)
mqtt_password: ""                  # Mot de passe MQTT (optionnel)
polling_fast: 5                    # Intervalle temps réel (secondes)
polling_slow: 300                  # Intervalle config (secondes)
```

### Identifier vos ports série

Pour trouver vos ports série USB :

```bash
ls -l /dev/ttyUSB*
```

Résultat typique :
```
crw-rw---- 1 root dialout 188, 0 Feb  6 10:00 /dev/ttyUSB0
crw-rw---- 1 root dialout 188, 1 Feb  6 10:00 /dev/ttyUSB1
```

### Configuration avancée

**Polling rapide** (3-30 secondes) :
- QPIGS, QPIGS2, QMOD, QPIWS
- Valeurs temps réel (tensions, courants, puissances, SoC)

**Polling lent** (60-1800 secondes) :
- QPIRI, QPI, QID, QVFW, QFLAG
- QET, QEY, QEM, QED (énergies PV)
- QLT, QLY, QLM, QLD (énergies load)
- QDOP, QBEQI

## 📊 Entités créées dans Home Assistant

### 🖥️ Onglet 1 : Monitoring (temps réel)

**Tensions :**
- Tension réseau, sortie AC, batterie, PV1, PV2, bus

**Courants :**
- Courant charge/décharge batterie, PV1, PV2

**Puissances :**
- Puissance sortie AC, PV1, PV2, batterie

**Autres :**
- SoC Batterie (%)
- Charge sortie (%)
- Température
- Fréquences
- Énergies jour/mois/année

### ⚙️ Onglet 2 : Configuration (modifiable)

**Selects :**
- Priorité source (UTI/SOL/SBU)
- Type batterie (AGM/Flooded/Pylon/Lib/etc.)
- Priorité charge (Solar First/Solar+Utility/Solar Only)

**Numbers :**
- Tensions batterie (bulk, float, cut-off, shutdown, CV)
- Courants (charge max, charge utility max, décharge max)
- Capacités (recharge, redécharge, coupure en %)
- Temps max charge CV

**Button :**
- Régler la date (synchronisation automatique)

**QDOP (relais sortie 2) :**
- Paramètres d'activation/coupure basés sur tension/capacité/temps

### 🔍 Onglet 3 : Diagnostic (infos système)

- Numéro de série
- Modèle
- Version firmware (CPU principal + panel)
- Protocol ID
- Mode actuel
- Status warnings
- Flags système
- Date/heure
- Paramètres nominaux

## 🎨 Dashboard exemple

```yaml
type: vertical-stack
cards:
  - type: entities
    title: Onduleur Principal
    entities:
      - sensor.onduleur_voltronic_1_mode
      - sensor.onduleur_voltronic_1_soc_batterie
      - sensor.onduleur_voltronic_1_puissance_pv1
      - sensor.onduleur_voltronic_1_puissance_sortie_ac
      - sensor.onduleur_voltronic_1_puissance_batterie
  
  - type: entities
    title: Configuration
    entities:
      - select.onduleur_voltronic_1_priorite_source_sortie
      - select.onduleur_voltronic_1_type_batterie
      - number.onduleur_voltronic_1_tension_bulk_batterie
      - number.onduleur_voltronic_1_courant_charge_max
```

## 🔧 Dépannage

### L'add-on ne démarre pas

1. Vérifier les logs : **Supervisor** → **Voltronic MQTT** → **Log**
2. Vérifier que le port série existe : `ls -l /dev/ttyUSB*`
3. Vérifier les permissions (doit être dans le groupe `dialout`)

### Les entités n'apparaissent pas

1. Vérifier que Mosquitto MQTT est actif
2. Vérifier l'auto-discovery dans HA : **Configuration** → **Intégrations** → **MQTT**
3. Redémarrer Home Assistant
4. Vérifier les logs de l'add-on

### Pas de données de l'onduleur

1. Vérifier le port série dans la configuration
2. Tester la communication : activer le port 1880 et accéder à Node-RED
3. Vérifier le baud rate (doit être 2400)
4. Vérifier le câble série

### Commandes non appliquées

1. Vérifier les logs
2. Attendre 2 secondes entre deux commandes
3. Certains paramètres nécessitent un redémarrage de l'onduleur
4. Vérifier les limites min/max

## 🔒 Accès Node-RED (debug)

Par défaut, Node-RED est accessible sur le port 1880 pour le debug :

```
http://homeassistant.local:1880
```

**Identifiants :**
- Username: `admin`
- Password: `admin`

⚠️ **Production** : Désactiver l'accès en retirant le port 1880 de `config.yaml`

## 📡 Topics MQTT

### Publication (états)
```
voltronic/1/state          # État complet JSON onduleur 1
voltronic/2/state          # État complet JSON onduleur 2
voltronic/3/state          # État complet JSON onduleur 3
```

### Commandes (écoute)
```
voltronic/1/set/POP        # Modifier priorité source
voltronic/1/set/MUCHGC     # Modifier courant charge utility
voltronic/1/set/PBCV       # Modifier tension bulk
...
```

### Auto-discovery
```
homeassistant/sensor/voltronic_1/grid_voltage/config
homeassistant/sensor/voltronic_1/battery_capacity/config
homeassistant/select/voltronic_1/POP/config
homeassistant/number/voltronic_1/MUCHGC/config
...
```

## 🔄 Mises à jour

Pour mettre à jour l'add-on :

1. **Supervisor** → **Voltronic MQTT**
2. Cliquer sur **Update** si disponible
3. Redémarrer l'add-on

## 📝 Changelog

### Version 2.0.0 (2026-02-06)
- Refonte complète du système
- Auto-découverte MQTT automatique
- Support multi-onduleurs
- Plus de 100 entités par onduleur
- Configuration via interface HA
- Support complet du protocole Voltronic

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

- Reporter des bugs
- Proposer des améliorations
- Soumettre des pull requests

## 📄 Licence

Open Source - Utilisation libre

## 🙏 Crédits

Basé sur le protocole Voltronic Axpert MAX/VMIV/MKSIV
