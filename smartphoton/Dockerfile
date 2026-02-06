ARG BUILD_FROM=ghcr.io/home-assistant/amd64-base:3.18
FROM ${BUILD_FROM}

# Variables d'environnement
ENV LANG=C.UTF-8

# Installer les dépendances
RUN apk add --no-cache \
    nodejs \
    npm \
    python3 \
    make \
    g++ \
    linux-headers \
    jq

# Créer les répertoires
RUN mkdir -p /data/nodered

# Installer Node-RED globalement
RUN npm install -g --unsafe-perm node-red@3.1.0

# Installer node-red-node-serialport (dernière version)
RUN npm install -g --unsafe-perm node-red-node-serialport

# Copier les fichiers
COPY rootfs /

# Rendre le script exécutable
RUN chmod +x /etc/services.d/nodered/run

# Exposer le port
EXPOSE 1880

# Labels
LABEL \
    io.hass.name="Voltronic MQTT" \
    io.hass.description="Gestionnaire onduleurs Voltronic" \
    io.hass.arch="armhf|armv7|aarch64|amd64|i386" \
    io.hass.type="addon" \
    io.hass.version="2.0.0"
