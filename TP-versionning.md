# TP versionning

Compétences à acquérir :
- Créer un repository (dépôt de sources) sur github
- Connecter un projet existant au repository
- Créer des commits (version du projet à un instant T)
- Envoyer les commits sur le repository (push)
- Récupérer le projet depuis le repository


## 1. Installer Git

Git est un logiciel de gestion de version. Il permettra de créer un grand nombre de versions pour le projet et de revenir ultérieur sur chacune des versions si on le souhaite.

- Télécharger et installer git depuis https://git-scm.com/
- Lors de l'installation, laisser les options par défaut


## 2. Créer un compte github

Ce compte permettra de publier notre code (qui pourra rester privé) sur la platforme github.com. 
L'utilisation est gratuite pour ls individus.

- Créer un compte sur http://github.com/


## 3. Installer Github Desktop

Github Desktop permet de faciliter l'utilisation de git en proposant des assistants pour réaliser les différentes opérations.
 
- Télécharger et installer Github Desktop
 https://desktop.github.com/
- Lancer le programme, se connecter avec le compte créé
- Configurer git avec son nom et email


## 4. Créer un repository depuis un dossier de projet
 
Depuis Github Desktop, nous allons transformer un dossier projet en repository git. Techniquement cel va uniquement ajouter un dossier ".git" dan notre dossier, ce dossier contiendra toutes les informations nécessaire pour le fonctionnement de git.

- Dans l'interface de github Desktop, choisir sur "Add an existing repository from your hard drive".
- Sélectionner le dossier du projet portfolio, Github Desktop proposera l'opption "Create a repository". Choisir cette option et renseigner les champs.
    - ne pas cocher le README, ce fichier sert à afficher des informations lorsqu'on consulte le projet depuis github. Par exemple, sur https://github.com/Lythom/limartb3 le contenu du README est affiché en bas de page.
    - Git ignore: None. Ce fichier permet d'indiquer a git des fichiers du dossier qu'on ne veut pas versionner. On y mettra typiquement notre dossier "dist/", mais pas pour le moment.
    - Licence: None. Nous choisirons un repository privé, mais si on veut le publier cela permet de créer un fichier licence automatiquement.


## 5. Créer des versions

Le projet est maintenant versionné. Nous ajoutons un fichier pour essayer de créer un commit (nouvelle version) qui contient ce fichier.

- Dans le dossier du projet, créer un fichier ".gitignore". Il nous permettra d'exclure le dossier dist de la version. Nous n'avons pas besoin de le versionnier car nous pouvons le regénérer à volonté grace au script créé précédemment (build.bat).
- dans .gitignore, ajouter une ligne indiquant "dist".
- Le script build.bat peut d'ailleurs être améliorer, m'appeler !
- Dans Github Desktop, voir les modification. En bas à gauche, bien mettre un message de commit ! Il est important car sans lui nous ne pourrons pas savoir d'un coup d'oeil ce qui a été modifié.
    - message: "Add dist to .gitignore"
    - cliquer sur "commit to master"
    - le changement ne devrait plus apparaitre.
    
master est une branche. Celle par défaut. Il est possible d'utiliser git de façon avancée en manipulant plusieurs branche, nous nous contenterons d'utiliser master.


## 6. retrouver une version précédente

Et si on veux retrouver la version d'avant ? Celle qui n'avait pas encore de .gitignore ?

-  Depuis Github Desktop, trouver l'onglet "history" à gauche. Tous les commit sont affichés, il est possible de cliquer dessus pour retrouver chaque modification de chaque commit. Ainsi, on est sur de ne plus rien perdre ! Même les fichiers supprimés et lignes de codes enlevées apparaitront.

Note: il est possible avec git de restaurer entièrement le projet dans un état antérieur. C'est cependant une manipulation qui n'est pas permise directement par Github Desktop et qui pourrait s'avérer complexe. Demander l'aide d'un développeur expérimenté si besoin !


## 7. Sauvegarder en ligne

Maintenant que des versions sont créées, on va les sauvegarder en ligne. Cela nous permettra de les récupérer depuis n'importe quelle machine, on pourra même consulter le code en ligne.

- Lorsqu'aucune modification n'est en cours, Github Desktop nous propose "Publish repository". le faire.
- Donner un nom et une description, publier.
- En bas à droite, cliquer sur "View on github" pour voir votre code en ligne. Si vous avez bien coché la case "Private", vous ne pourrez voir le projet que si vous êtes connecté.

La publication est une étape unique qu'on ne fait que la première fois. Maintenant que le projet est publié, github nous proposera de "push" nos modification à la place, cela fonctionne de la même façon.

- Faire une modification dans un fichier.
- Faire un commit.
- vérifier sur la page github du projet, la modification n'est pas encore là !
- Cliquer sur "push" pour envoyer le modification.
- vérifier sur la page github du projet que la modification est bien arrivée cette fois.


## 8. Récupérer le projet

Crash disque ou changement de machine, on a vite perdu un projet… voyons comment on peut récupérer le projet dans un nouveau dossier.

- Depuis Github Desktop, Cliquer sur le carré noir en haut à gauche où est indiqué "current repository". Celà ouvre la liste des projets.
    - La liste de projet permet de changer de projet si vous en avez plusieurs de connus par Github Desktop.
    - Si vous décidez d'ajouter de nouveaux projets, c'est aussi ici que vous pourrez le faire !
- Ici, nous choisirons "Add" puis "Clone repository".
- La liste des repositories de notre compte github est proposée, choisir <username>/portfolio, indiquer un chemin sur le disque sur où sauvegarder le fichier, puis "clone".

Le projet sera téléchargé dans le dossier indiqué et connecté au système de versions !


## 9. Aller plus loin avec Netlify

- Générer un nouveau dist avec build.bat
- supprimer "dist" du fichier .gitignore
- commit puis push
- Sur netlify.com, se connecter avec son compte github.
- Ajouter un nouveau site en choisissant le repository du projet
- Laisser tout par défaut SAUF "Publish directory", indiquer "dist"
- Cliquer sur "Deploy site"
- Enjoy

Désormais, à chaque fois qu'on fera une modification et qu'elle sera "push" sur github le site web sera déployé automatiquement.
