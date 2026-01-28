# Smartphoton Add-on Home Assistant basé sur node red

Smartphoton est un addon de gestion d'onduleurs et de batteries

**Onduleur**
* [x] Voltronic (wks, Axpert ...)

**Batterie**
* [x] Pylontech
* [x] JKBMS

**Tension Batterie**
* [x] 48 volt
* [x] 24 volt
* [ ] 12 volt

<br /><br />
---
## Installation
---

L'installation de ce module complémentaire est assez simple et ne diffère pas en
comparaison avec l’installation de tout autre module complémentaire Home Assistant.

1. Ajouter le dépot "https://github.com/jean-luc1203/smartphoton-ha-addon/" dans la boutique des modules complémentaires
1. Cliquez sur le bouton "Installer" pour installer le module complémentaire..
1. Configurer votre installation dans le menu configuration.
1. Enregistrement de votre licence ici : [Smartphoton licence][addon-licence]
1. Démarrez le module complémentaire "Smartphoton".
1. Vérifiez les journaux de "Smartphoton" pour voir si tout s'est bien passé.

Vous pouvez vous aider du [Smartphoton Configuration][addon-config] pour votre yaml

<br /><br />
---
## Onduleur
---  
### Option: `Licence`
Enregistrement de votre licence ici :
[Smartphoton licence][addon-licence]


### Option: `Choix port Liste Onduleur ou listonduleur`
Choisir du port usb de d'onduleur. ("false" pour ne pas l'utiliser)<br />
Chemin : ip ou serial. (<ip>:<port>) ou /dev/serial/by-id/<nom du serial><br />
Type : ip, rs485 ou serial<br />
Onduleur : choix de la batterie. false ou voltronic<br />
multionduleur : Utilisation des qpgs. (Cette option n'est plus disponnible)<br />
battTension : Tension des batterie branché sur l'onduleur<br />


<br /><br />
**exemple**
```yaml
- chemin: "false"
```
ou pour une communication avec onduleur en usb

```yaml
- chemin: /dev/serial/by-id/usb-Prolific_Technology_Inc._ATEN_USB_to_Serial_Bridge_EQDPb115818-if00-port0
  type: serial
  onduleur: voltronic
  battTension: 48
```

ou pour une communication avec onduleur en ip ou elfin

```yaml
- chemin: 192.168.1.252:8888
  type: ip
  onduleur: voltronic
  battTension: 48
```

<br /><br />
**Options disponibles**

<table width="100%" cellspacing="0" cellpadding="6" border="1">
  <thead>
    <tr>
      <th>Clé</th>
      <th>chemin</th>
      <th>type</th>
      <th>onduleur</th>
      <th>battTension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Nom</strong></td>
      <td>chemin</td>
      <td>type</td>
      <td>onduleur</td>
      <td>battTension</td>
    </tr>
    <tr>
      <td><strong>Valeur par défaut</strong></td>
      <td>false</td>
      <td>serial</td>
      <td>voltronic</td>
      <td>48</td>
    </tr>
    <tr>
      <td><strong>Obligatoire</strong></td>
      <td>oui</td>
      <td>oui</td>
      <td>oui</td>
      <td>non</td>
    </tr>
    <tr>
      <td><strong>Options</strong></td>
      <td>Adresse ip<br /> chemin serial</td>
      <td>ip<br /> serial</td>
      <td>voltronic</td>
      <td>48<br /> 24<br /> 12</td>
    </tr>
  </tbody>
</table>


**Intervalle** <br />
Temps d'attente en secondes entre chaque requête. Remarque : évitez de descendre en dessous de 1. Si vous avez des timeouts fréquents, augmentez ce nombre. 

<br /><br />
---
## Batterie
---

### Option: `Choix port Liste batterie ou listbatterie`
Choisir du port usb de la batterie. ("false" pour ne pas l'utiliser)<br />
Chemin : ip ou serial. (<ip>:<port>) ou /dev/serial/by-id/<nom du serial><br />
Type : ip ou serial<br />
Batterie : choix de la batterie. false ou pylontech<br />
nbSlave : Nombre de batterie en esclave (jkbms seulement)


<br /><br />
**exemple**
```yaml
- chemin: "false"
```
ou pour une communication avec batterie en usb

```yaml
- chemin: /dev/serial/by-id/usb-Prolific_Technology_Inc._ATEN_USB_to_Serial_Bridge_EQDPb115818-if00-port0
  type: serial
  batterie: pylontech
```

ou pour une communication avec batterie en ip ou elfin

```yaml
- chemin: 192.168.1.252:8888
  type: ip
  batterie: pylontech
```

<br /><br />
**Options disponibles**

<table width="100%" cellspacing="0" cellpadding="6" border="1">
  <thead>
    <tr>
      <th>Clé</th>
      <th>Chemin</th>
      <th>Type</th>
      <th>Batterie</th>
      <th>NbSlave</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Nom</strong></td>
      <td>chemin</td>
      <td>type</td>
      <td>batterie</td>
      <td>nbSlave</td>
    </tr>
    <tr>
      <td><strong>Valeur par défaut</strong></td>
      <td>false</td>
      <td>serial</td>
      <td>pylontech</td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>Obligatoire</strong></td>
      <td>oui</td>
      <td>oui</td>
      <td>oui</td>
      <td>non</td>
    </tr>
    <tr>
      <td><strong>Pylontech</strong></td>
      <td>Adresse IP<br /> chemin serial</td>
      <td>ip<br /> serial</td>
      <td>false<br /> pylontech</td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>JKBMS</strong></td>
      <td>Adresse IP,<br /> chemin serial</td>
      <td>ip<br /> rs485</td>
      <td>false<br /> jkbms</td>
      <td>1<br /> à <br /> 15</td>
    </tr>
  </tbody>
</table>


**Intervalle** <br />
Temps d'attente en secondes entre chaque requête. Remarque : évitez de descendre en dessous de 6. Si vous avez des timeouts fréquents, augmentez ce nombre. 


**JKBMS** <br />
Les commandes sont affiché mais ne sont pas activé
<br /><br />
---
## Nom des entités ou nameEntities
---

Permet de personnalisé les noms des entités onduleur.

<br /><br />
---
## MQTT (obligatoire)
---
Vous devez avoir un broker mqtt (vous pouvez l'intaller via la boutique des module complémentaire. [Addon Mosquitto broker][addon-mqtt])
Il sera ensuite indispenssable d'ajouter intégration mqtt (voir doc mqtt)


### Option: 
**mqttadresse** Adresse de votre broker

**mqttport** port broker

**mqttuser** utilisateur de connexion 

**mqttpass** mot de passe de connexion
<br /><br />



## Changelog & Releases
---

`MAJOR.MINOR.PATCH`

- `MAJOR`: Incompatible or major changes.
- `MINOR`: Backwards-compatible new features and enhancements.
- `PATCH`: Backwards-compatible bugfixes and package updates.


## Support
---
- [Github][depot-mqtt]
- [Site][site]
- [Forum][forum]
- [Documentations Github][documentation]


## Authors & contributors
---
Smartphoton, Jean-luc / Alexis / Romain / Khamel / Samuel

The original setup of this repository is by [Franck Nijhof][frenck].




[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon-config]: http://domosimple.eu/onduleur/
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_nodered&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[addon-mqtt]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mosquitto&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[depot-mqtt]: https://github.com/jean-luc1203/smartphoton-ha-addon/
[site]: https://smartphoton.fr/
[forum]: http://domosimple.eu/forum/
[documentation]: https://github.com/jean-luc1203/Smartphoton-Documentation
[alpine-packages]: https://pkgs.alpinelinux.org/packages
[contributors]: https://github.com/hassio-addons/addon-node-red/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-node-red/55023?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-node-red/issues
[node-red-nodes]: https://flows.nodered.org/?type=node&num_pages=1
[nodered-docs]: https://nodered.org/docs
[nodered]: https://nodered.org
[npm-packages]: https://www.npmjs.com
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-node-red/releases
[semver]: http://semver.org/spec/v2.0.0.htm
