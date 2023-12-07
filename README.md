# AigrieTeam
Repo dédié pour le projet de la Nuit de l'info 2023

# Préparation de l'environnement de travail

## Backend (API)

### Installation des dépendances

```bash
cd backend
npm install
```

### Lancement du serveur en développement

- Copier le fichier `.env.example` en `.env` et remplir les variables d'environnement
- Lancer le serveur

```bash
npm start
```

### Mise en forme du code

```bash
npm run format
```

### Commande pour le serveur de prod 

#### Pour enregistrer le backend : 
```bash
pm2 start -n Backend server.js
```

#### Pour stoper le backend : 
```bash
pm2 stop Backend
```

#### Pour lancer le backend : 
```bash
pm2 start Backend
```

#### Pour voir les logs :
```bash
pm2 logs Backend
```

#### Pour monit le backend : 
```bash
pm2 monit 
```