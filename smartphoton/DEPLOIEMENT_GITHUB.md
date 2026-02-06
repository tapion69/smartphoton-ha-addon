# 🚀 Guide de déploiement GitHub

## 1️⃣ Créer le repository GitHub

1. Aller sur https://github.com
2. Créer un nouveau repository : **voltronic-mqtt-addon**
3. Choisir **Public** (pour que les utilisateurs puissent l'installer)
4. Ne pas initialiser avec README (on a déjà le nôtre)

## 2️⃣ Pousser le code

```bash
cd /chemin/vers/voltronic-addon

# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🎉 Version 2.0.0 - Refonte complète add-on Voltronic MQTT"

# Ajouter le remote (remplacer VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/voltronic-mqtt-addon.git

# Pousser
git branch -M main
git push -u origin main
```

## 3️⃣ Créer un tag de version

```bash
git tag -a v2.0.0 -m "Version 2.0.0"
git push origin v2.0.0
```

## 4️⃣ Activer GitHub Actions (optionnel)

Pour builder automatiquement les images Docker multi-arch :

Créer `.github/workflows/build.yaml` :

```yaml
name: Build Add-on

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Login to GitHub Container Registry
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Build and push
        uses: home-assistant/builder@master
        with:
          args: |
            --all \
            --target . \
            --docker-hub ghcr.io/${{ github.repository_owner }}
```

## 5️⃣ Installation par les utilisateurs

Les utilisateurs pourront installer ainsi :

1. Dans HA : **Supervisor** → **Add-on Store**
2. Menu (⋮) → **Repositories**
3. Ajouter : `https://github.com/VOTRE-USERNAME/voltronic-mqtt-addon`
4. Installer "Voltronic MQTT"

## 6️⃣ Structure du repository

```
voltronic-mqtt-addon/
├── .github/
│   └── workflows/
│       └── build.yaml          # CI/CD (optionnel)
├── rootfs/
│   └── etc/
│       ├── nodered/
│       │   ├── flows-template.json
│       │   └── settings.js
│       └── services.d/
│           └── nodered/
│               └── run
├── .gitignore
├── CHANGELOG.md
├── DOCS.md
├── Dockerfile
├── README.md
├── build.yaml
├── config.yaml
└── repository.yaml
```

## 7️⃣ Maintenance

### Publier une nouvelle version

```bash
# Modifier les fichiers nécessaires
git add .
git commit -m "✨ Nouvelle fonctionnalité"
git push

# Créer un nouveau tag
git tag -a v2.1.0 -m "Version 2.1.0"
git push origin v2.1.0
```

### Mettre à jour config.yaml

Ne pas oublier de changer la version dans `config.yaml` :

```yaml
version: "2.1.0"
```

## 8️⃣ Support utilisateurs

Les utilisateurs pourront :
- Ouvrir des **Issues** pour signaler des bugs
- Créer des **Pull Requests** pour contribuer
- Consulter le **README** pour la documentation

## ✅ Checklist avant publication

- [ ] Tester l'add-on localement
- [ ] Vérifier que tous les ports série sont configurables
- [ ] Vérifier que l'auto-discovery fonctionne
- [ ] Tester avec 1, 2 et 3 onduleurs
- [ ] Compléter le README avec des screenshots
- [ ] Modifier `VOTRE-USERNAME` partout
- [ ] Créer le repository GitHub
- [ ] Pousser le code
- [ ] Tester l'installation depuis GitHub
- [ ] Publier v2.0.0

## 🎉 C'est prêt !

Une fois publié, partagez le lien :

```
https://github.com/VOTRE-USERNAME/voltronic-mqtt-addon
```

Les utilisateurs pourront l'installer en 1 clic ! 🚀
