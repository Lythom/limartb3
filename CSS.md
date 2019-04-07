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


## Linter CSS

### http://csslint.net

### stylelint


## Pré-processeurs

### SASS

https://sass-lang.com/


## Post-processeurs

### Autoprefixer

### postcss

https://postcss.org/