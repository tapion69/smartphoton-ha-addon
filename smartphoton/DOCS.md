# Documentation Voltronic MQTT

## Configuration rapide

### 1. Ports série

Identifiez vos ports série USB :

```bash
ls -l /dev/ttyUSB*
```

Configurez dans l'add-on :
- **serial_port_1** : `/dev/ttyUSB0` (obligatoire)
- **serial_port_2** : Vide si un seul onduleur
- **serial_port_3** : Vide si moins de 3 onduleurs

### 2. MQTT

Si vous utilisez l'add-on Mosquitto MQTT :
- **mqtt_broker** : `core-mosquitto`
- **mqtt_port** : `1883`
- **mqtt_user** : Vide (sauf si configuré)
- **mqtt_password** : Vide (sauf si configuré)

### 3. Polling

- **polling_fast** : `5` secondes (temps réel)
- **polling_slow** : `300` secondes (5 minutes)

## Après installation

1. Démarrer l'add-on
2. Vérifier les logs pour d'éventuelles erreurs
3. Aller dans **Configuration** → **Appareils**
4. Chercher "Onduleur Voltronic"
5. Vous verrez 3 onglets avec toutes les entités

## Support

Pour toute question ou problème :
1. Consultez les logs de l'add-on
2. Vérifiez le README complet
3. Ouvrez une issue sur GitHub
