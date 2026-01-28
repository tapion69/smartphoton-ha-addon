## 2.0.06
- Modification parametre 11
	  
## 2.0.05
- **Ajout QDOP**
  - **Attention non testé**, ajout des paramètres :

    - **--PBCC<nnn>** : Définir la capacité de recharge de la batterie
      - L'unité est le pourcentage (%) allant de 5 à 95.

    - **--PBDC<nnn>** : Définir la capacité de décharge de la batterie
      - L'unité est le pourcentage (%) allant de 10 à 100.

    - **--PSDC<nnn>** : Définir la capacité de coupure de la batterie
      - L'unité est le pourcentage (%) allant de 0 à 90.



## 2.0.04
- Correction Debug

## 2.0.03
- Ajout d'un warning en cas de valeur trop courte pour éviter les Time Out.

## 2.0.02
/*Voltronic*/
- Mise à niveau des requêtes pour une meilleure fiabilité.
- Protection contre les requêtes trop rapprochées afin d’éviter les erreurs.
- Remontée plus fréquente des informations de production.
- Rafraîchissement automatique après toute modification des paramètres.

## 2.0.01
- Correction du paramètre 5 pour Voltronic.

## 2.0.00
- Ajout de JKBMS basé sur JL.
- Optimisation du module.
- Mise à jour de la documentation.

## 1.4.00
- Ajout de la licence, enregistrez votre licence sur [domosimple.eu/licence.php](https://domosimple.eu/licence.php).
- Ajout du calcul CRC.
- Ajout de la création de capteurs HA (Appareil MQTT → SmartPhoton → Redémarrer HA).
- Ajout du capteur de consommation réseau (compatible avec les nouveaux onduleurs).
- Ajout de l'intervalle de temps entre chaque communication pour l'onduleur en secondes (par défaut 2 secondes).
- Ajout d'un intervalle de requêtes suivant l'intervalle de communication.
- Ajout des modes Charge, Bypass et Eco.
- Ajout d’un deuxième MQTT sur des onduleurs différents.
- Ajout du contrôle des LEDs.
- Ajout de la configuration de la date et de l'heure de l'onduleur à partir du serveur.
- Ajout de commandes personnalisées.
- Ajout d'attributs sur les codes d'erreur.
- Ajout du numéro de version et du modèle.
- Ajout des options 130 et 140 au paramètre charge maximale.
- Ajout du mode debug.
- Ajout de la version "Full" ou "min".
- Ajout de la vérification de communication.
- Ajout d'attributs Stats Batterie sur le Life Cycle Correction Voltronic.
- Organisation de la gestion des erreurs.
- Modification des options des paramètres 12 et 13 Voltronic à 0.1.
- Vérification des données Voltronic.
- Alerte : signalement et tentative de reconnexion suite à un problème de communication.
- Remplacement des variables globales de noms.
- Remplacement des variables globales de paramètres.
- Remplacement des variables globales MQTT.
- Remplacement des noms des onduleurs.
- Mise à jour vers Node.js : 0.2.5.
- Mise à jour de Node-RED : 4.0.3.
- Refonte de la configuration des variables globales.
- Ajout de la configuration pour le minimum de commande.
- Suppression du QPGS.

## 1.3.11
- mise a jour vers nodejs:0.2.4
- Correction du chemin batterie


## 1.3.10
- Correction du Life Cycle sur pylontech
- Mise a jour node red 4.0.2
- Mise a jour node-red-contrib-home-assistant-websocket v0.68.0
- Mise a jour node-red-contrib-modbus v5.42.0
- Mise a jour node-email v3.0.1
- Mise a jour node-red-node-serialport v2.0.3
- 

## 1.3.9
- Modification de la classe watt en power
- Nouvelle gestion pylontech
- Renomage des noms mqtt pour les onduleurs
- Ajout d'un mqtt interne pour utilisation futur
- Correction d'affichage des erreurs onduleur
- Ajout du sensor code erreur en forme de tableau
- Mise à jour base-nodejs v0.2.2
- Mise a jour node-email v3.0.0
- Mise a jour node-red-contrib-modbus v5.40.0
- Mise a jour theme-collection v4.0.1
- Mise a jour node red 4.0.0

## 1.3.8
- Mise a jour node red v3.1.9
- Mise a jour node-red-contrib-home-assistant-websocket v0.64.0
- Mise a jour node-red-contrib-modbus v5.31.0
- Mise a jour base-nodejs v0.2.1

## 1.3.7
- Mise a jour node red v3.1.8
- Mise a jour node-red-contrib-home-assistant-websocket v0.63.1
- Mise a jour node-red-dashboard v3.6.5
- Correction du dashboard smartphoton
- Mise a jour base-nodejs v0.1.4
- Mise a jour node red v3.1.6
- Mise a jour node-red-contrib-bigtimer v2.8.6
- Mise a jour node-red-node-email v2.2.0

## 1.3.6
- Correction connection auto mqtt
- Correction Paramètre 11, 12 et 29 onduleur 24v
- Retour QPGS1
- Ajout code erreur
- Ajout des parametres dans l'appareil smartphoton
- Modification des noms de paramètres par défault pour compatibilités avec d'autres onduleurs
- Ajout de tension de charge en vrac (paramètre 26 sous voltronic)

## 1.3.5
- Correction Paramètre 11 et 2 sur les onduleurs non parallèles

## 1.3.4
- Force les mises à jour des capteurs mqtt

## 1.3.3 /!\ Attention voir forum (Version 1.3) avant installation /!\ 
Voir ici: https://domosimple.eu/forum/thread-691.html
- mise à jour node-red-contrib-home-assistant-websocket to v0.63.0

## 1.3.2  
- mise à jour node-red-contrib-modbus to v5.29.0
- Mise a jour to v3.1.5

## 1.3.1
- Nouvelle configuration des onduleurs
- Nouvelle gestion des serials
- Nouvelle gestion des IPs (elfin)
- Nouvelle gestion des onduleurs parallèles
- Simplification elfin
- Mise en place des multi USBs
- Suppression du nombre d'onduleur via le parallèle
- Ajout de la tension batterie par onduleur
- Possibilité d'activer ou non la récupération des onduleurs parallèles (option multionduleur)
- Ajout de l'appareil mqtt smartphoton (Pour de futurs options)
- Correction parametre 11

## 1.3
- Prise en charge de plusieurs USBs

## 1.2.1
- Mise à jour base-nodejs v0.1.3
- Mise à jour alpine_3_19/nginx to v1.24.0-r15

## 1.2.0
- Ajout conso maison onduleur parallèle
- Ajout serial onduleur parallèle
- Correction sur le paramètre onduleur non parallèle

## 1.2.0
- Ajout Nombre d'onduleur
- info sur les onduleurs secondaires

## 1.1.5
- Correction du mode onduleur

## 1.1.4
- Correction sur la création des sensors mppt
- Correction sur la création du sensor nombre de batterie
- Correction parametre 2 pour onduleur parallèle

## 1.1.3
- Mise à jour base-nodejs en v0.1.2
- Mise à jour addon node red en v17.0.3
- Ajout debug vision
- Ajout Version sur les appareils mqtt

## 1.1.2
- Ajout deuxième entrée mppt

## 1.1.1
- Ajout de l'option Aucune sur le choix des batteries

## 1.1.0
- Mise à jour de certaines aplications
- Mise à jour alpine v3.19
- Mise à jour De addon-node-red v17.0.2 (v3.1.3)

## 1.0.0

