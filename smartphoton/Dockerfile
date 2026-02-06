ARG BUILD_FROM
FROM $BUILD_FROM

# Installer Node.js et Node-RED
RUN apk add --no-cache \
    nodejs \
    npm \
    python3 \
    make \
    g++ \
    git

# Installer Node-RED globalement
RUN npm install -g --unsafe-perm node-red@3.1.0

# Installer les nodes nécessaires
RUN cd /usr/lib/node_modules/node-red && \
    npm install --save \
    node-red-node-serialport@1.0.6

# Créer les répertoires
RUN mkdir -p /data/nodered

# Copier les fichiers de configuration
COPY rootfs /

# Rendre le script de démarrage exécutable
RUN chmod a+x /etc/services.d/nodered/run

# Exposer le port Node-RED
EXPOSE 1880

# Labels
LABEL \
    io.hass.name="Voltronic MQTT" \
    io.hass.description="Gestionnaire d'onduleurs Voltronic avec MQTT" \
    io.hass.type="addon" \
    io.hass.version="2.0.0"
