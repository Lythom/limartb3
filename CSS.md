# CSS

## Spécificité

1. importance
2. particularité
3. ordre de déclaration

### Importance

!important ou non


### particularité

- Attribut style: 1000 points
- par id `#unId { … }`: 100 points
- par classe `.uneClasse { … }`, par attribut `[type=text] { … }`, par pseudo classe `:hover { … }`: 10 points
- par élément `h1 { … }` ou `div { … }`: 1 point

exemples:
- `div.slide` = 11 points
-  `.imagetitre:hover` = 20 points
- `.menu li` = 11 points

### ordre de déclaration

Les derniers déclarations écrasent les précédentes.


## Héritage

### inherit

même valeur que le parent


### initial

valeur par défaut du navigateur



## Méthodologies : BEM, OOCSS, atomic design

### Principe

### Exemples

## Design


# Automatisation des optimisation

## Outils disponibles

Grunt, gulp, npm (node package manager)


## Node.js (et npm)

1. Installer https://nodejs.org/fr/
2. Ouvrir un terminal
3. entrer la commande `node -v` pour vérifier l'installation


## Linter CSS

### à la main

http://csslint.net


### automatiquement

- Prettier : Formattage automatique du CSS et HTML. (https://github.com/prettier/prettier)
- PostCSS : Vérifie et transforme le CSS (https://github.com/postcss/postcss#npm-run--cli)
- Autoprefixer : Ajoute des préfixer au CSS pour assurer la compatibilité navigateur (https://github.com/postcss/autoprefixer#cli)
- Stylelint
    - https://stylelint.io/user-guide/cli/
    - https://github.com/prettier/stylelint-prettier#installation

1. Installer les dépendances `npm install -g prettier postcss-cli autoprefixer stylelint stylelint-prettier stylelint-config-prettier`
3. Créer un fichier `.browserslistrc` qui contient https://github.com/Lythom/limartb3/blob/master/.browserslistrc
4. Créer un fichier `.stylelintrc` qui contient https://github.com/Lythom/limartb3/blob/master/.stylelintrc
5. Exécuter le script `build.sh` (linux, max) ou `build.bat`.


## Pré-processeurs

### SASS

https://sass-lang.com/


## Post-processeurs

### Autoprefixer

### postcss

https://postcss.org/