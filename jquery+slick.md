# Jquery

## Installation

1. https://jquery.com/ (ou `jquery` sur un moteur de recherche).
2. Télécharger JQuery (Choisir la version `compressed, production jQuery`).
3. Mettre le fichier `jquery-[version].min.js` dans le projet dans un sous dossier `lib`.
4. Dans chaque fichier html nécessitant jquery ajouter juste avant `&lt;/body&gt;` au dessus des autres imports JavaScript :
```html
<script type="text/javascript" src="lib/jquery-[version].min.js"></script>
```

## Utilisation

1. Ajouter des balises scripts avec les insctructions à l'intérieur
```html
<script>
    $(document).ready(function() {
        $('.image').fadeOut();
    });
</script>
```

# Slick (Carousel)

1. http://kenwheeler.github.io/slick/ (ou `slick carousel` sur un moteur de recherche).
2. Télécharger Slick ("Get it now" puis "Download now").
3. Mettre le dossier `slick` dans le projet dans un sous dossier `lib`.
4. Dans chaque fichier html nécessitant slick ajouter juste avant `&lt;/body&gt;`
```html
&lt;script type="text/javascript" src="lib/slick/slick.min.js">&lt;/script>
  ```
5. Ajuster les styles CSS