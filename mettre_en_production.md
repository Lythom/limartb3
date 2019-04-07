# Mettre en production

## Preparation des fichiers

Les fichiers "source" sur lesquels on travail sont localisés dans le dossier "src".

Les fichiers "distribués" qui sont optimisés pour la production dont localisés dans le dossier "dist".

1. Copier/coller tous les fichier html de src/ vers dist/
2. Copier/coller le contenu du fichier styles.css dans l'encadré de gauche de https://autoprefixer.github.io/
3. Copier/coller le contenu de l'encadré de droite dans un nouveau fichier `dist/styles.css`

Le dossier dist devrait alors contenir 3 fichiers, dont le css avec les prefix.


## Déploiment avec Netlify

1. Naviguer sur https://app.netlify.com/drop
2. Glisser déposer le dossier "dist" du projet sur la page web

Le site est déployé


## Configurer le site déployé

1. Créer un compte / se connecter sur netlify
2. Ouvrir le site correspondant dans la liste
3. Accéder à l'onglet settings, parcourir les options et configurer selon le besoin.


### Utiliser un nom de domaine personnalisé

1. Acheter un nom de domaine chez un fournisseur DNS dédié (ex: https://www.ovh.com/fr/, 1on1.com, gandi.net)
2. Sur netlify, aller dans settings/domain management et cliquer sur "Add domain alias"
3. Entrer le nom voulu (ex: portfolio.samuel-bouchet.fr) et confirmer ("yes, add domain")
4. Cliquer sur "Check DNS configuration" pour obtenir les informations de configration. Il s'agit d'une entrée CNAME qu'il faudra ajouter aux entrées DNS depuis le site de gestion de votre fournisseur DNS (lien obtenu au moment d'acheter le nom de domaine).
