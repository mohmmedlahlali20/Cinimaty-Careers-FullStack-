# Cinimaty Careers FullStack 🚀

Cinimaty Careers FullStack est une application web complète développée avec **Next.js** pour le frontend et **NestJS** pour le backend. Ce projet permet aux utilisateurs de rechercher des offres d'emploi par titre, de postuler, et de gérer les offres et les candidatures à travers des dashboards dédiés pour **Admin**, **RH**, et **Candidats**.

## 💻 Fonctionnalités

- **Candidats** : 
  - Visualiser les offres disponibles
  - Postuler à des offres
- **RH** : 
  - Gérer les offres d'emploi
  - Gérer les candidats (acceptation/rejet)
- **Admin** :
  - Gérer le site (utilisateurs, paramètres)

## 🌐 Planicfication Jira 
 [![Jira Icon](https://img.icons8.com/color/48/000000/jira.png)](https://mohmmedlaeh81.atlassian.net/jira/software/c/projects/CCA/list) [Lien vers le projet Jira](https://mohmmedlaeh81.atlassian.net/jira/software/c/projects/CCA/list)


## 🛠️ Technologies utilisées

- **Frontend** : [Next.js](https://nextjs.org/) avec **React** <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="30" />  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nextjs.png" alt="NextJS" height="30" /></a>
- **Backend** : [NestJS](https://nestjs.com/) avec TypsScript pour le traitement des offres <img style="margin: 10px" src="https://nestjs.com/img/logo.svg" alt="NestJS" height="30" />
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="30" /></a> 
- **Base de données** : MongoDB avec **Mongoose** <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="30" />
- **Cloud Storage** : [Cloudinary](https://cloudinary.com/) pour la gestion des images <img style="margin: 10px" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Cloudinary_logo.png" alt="Cloudinary" height="30" />
- **CSS Framework** : [Tailwind CSS](https://tailwindcss.com/) <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="30" />
- **Test** : [Jest](https://jestjs.io/) pour les tests unitaires, avec [Swagger](https://swagger.io/) pour la documentation de l'API <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/jest.svg" alt="Jest" height="30" />



## 🧪 Tests Unitaires et CI/CD

- Le projet utilise Jest pour les tests unitaires des fonctionnalités.
- Le projet est dockerisé pour un environnement de développement isolé et reproductible.
- La pipeline CI/CD est gérée via GitHub Actions pour le déploiement automatisé.



## 🚀 Déploiement

Tu peux déployer le projet via Docker en suivant les étapes ci-dessous.

1. Clone le dépôt :

    ```bash
    git clone https://github.com/mohmmedlahlali20/Cinimaty-Careers-FullStack-.git
    ```

2. Accède au répertoire du projet :

    ```bash
    cd Cinimaty-Careers-FullStack
    ```

3. Build et démarrage avec Docker :

    ```bash
    docker-compose up --build
    ```



## 📖 Documentation API (Swagger)

La documentation de l'API est disponible à l'adresse suivante après le démarrage du serveur :

    Documentation Swagger

## 📌 Lien vers le dépôt GitHub

Tu peux accéder au code source complet du projet ici : Cinimaty Careers FullStack GitHub


## 📦 Dépendances

Voici les principales dépendances utilisées dans le projet :

### Dépendances :
```json
"dependencies": {
  "@material-tailwind/react": "^2.1.10",
  "@radix-ui/react-tabs": "^1.1.2",
  "axios": "^1.7.9",
  "bcryptjs": "^2.4.3",
  "cloudinary": "^2.5.1",
  "date-fns": "^4.1.0",
  "dotenv": "^16.4.7",
  "js-cookie": "^3.0.5",
  "jsonwebtoken": "^9.0.2",
  "jwt-decode": "^4.0.0",
  "lucide-react": "^0.469.0",
  "mongoose": "^8.9.2",
  "multer": "^1.4.5-lts.1",
  "next": "15.1.2",
  "next-connect": "^1.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-redux": "^9.2.0",
  "react-router-dom": "^7.1.1",
  "swagger-ui-express": "^5.0.1",
  "sweetalert2": "^11.15.3"
}
