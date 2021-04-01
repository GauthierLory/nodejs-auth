# NodeJs-auth
NodeJs-auth-i18n est un petit projet pour découvrir l'i18n et l'authentification sur nodejs. Il s'agit principalement d'un projet pour apprendre l'utilisation de passport et de ses différentes strategy.

## Prérequis
Vous devez avoir installé Node.js et MongoDB si vous souhaitez exécuter l'application en local
Node.Js  **v14.15.1**

## Usage
     ~/ git clone https://github.com/GauthierLory/nodejs-auth-i18n
     ~/ cd ./ nodejs-api-blog
     ## Installation les dépendances
     ~/ npm install
     ## Lance l'application
     ~/ npm start

La configuration se trouve a `la racine`. Veuillez créer votre propre fichier `.env`. Vous pouvez trouver un exemple de fichier `.env` dans `.env.example`.

 ## Fonctionnalités
 - [x] Inscription d'un utilisateur
	 - [x] strategy local
	 - [x] strategy google 
 - [x] Connexion d'un utilisateur
 - [x] Protection des routes
 - [x] i18n
