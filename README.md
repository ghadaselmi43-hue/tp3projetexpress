# tp4projetexpress

question3:

le premier cas le résultat est true parcontre le deuxieme cas le resultat est false.

question5:
l est préférable de vérifier id avant d'appeler le service pour éviter de traiter des données invalides et séparer les responsabilités dans votre application.

tp5:

question1:

on utilise un utilisateur mysql pour des raison du sécurité.

question3:

Une migration est un mécanisme qui permet de gérer et de suivre les modifications de la structure d'une base de données au cours du développement d'une application.

question 4:

api - controller - service - repository - prisma - mysql 

question 5:

prisma studio permet de consulter les donneurs sans ecrire une requete relationnelle .

comprendre prisma :

1.
MySQL permet de stocker les données de ton application et prisma est un ORM qui facilite la communication entre l application et la base de donnée .

2.
Le fichier schema.prisma est le fichier dans lequel tu définis la structure de ta base de données.

Prisma Client est un outil généré par Prisma qui permet à ton application de communiquer avec ta base de données.

Une migration permet de modifier la structure de ta base de données en fonction des changements effectués dans schema.prisma.

tp6:

1.  le rôle de dons est un tableaux qui contient la liste de tout les donneurs .

     le rôle de donneurId est l identifient du donneurs .

    Quelle est la différence entre :

donneurId est un entier 

et :

donneur est 

activité 5:

donneurId: 1 est identifiant du donneur  dans la table don .


centreId: 1 est identidiant du centre dans la table don elle represente le cle secondiare .

on utilise include pour afficher les information du donneur et du centre d apres la table don .

activité 11:

asc : de facon ascendente 
desc : de facon descendente

activité 15:

on retourne total pour afficher le resultat du somme des dons .

activité 22 :

L'approche B est généralement préférable parce qu'elle permet de récupérer les donneurs et leurs dons directement avec Prisma, sans devoir effectuer une requête supplémentaire pour chaque donneur.

activité 23 :
Pour une API publique, je choisis select parce qu'il permet de respecter le principe du moindre privilège : ne transmettre au client que les informations dont il a réellement besoin.

 explicationn:

    le rôle d'une clé étrangère :
    une clé étrangére permet de recupérer une relation entre deux tables .
    le rôle de @relation :
    @relation permet de défenirr la relation entre les  modéles du  schema prisma .
    la différence entre include et select :
    include est utilise pour afficher les information des autres tables
    select permet de afficher les informations utiles.
    l'intérêt de where :
    where permet du filrer les donner suivant une condition ou plusieurs.
    le fonctionnement de skip et take :
    take permet de indiquer le nombre d enregistrement a recuperer .
    skip permet de indiquer le nombre d enregistrement a ignorer.
    le problème N+1 ;:
    Le problème N+1 est un problème de performance qui se produit lorsqu'une application exécute trop de requêtes SQL pour récupérer des données liées.
    pourquoi les requêtes Prisma doivent être placées dans le Repository plutôt que directement dans le Controller.
    repository gere l acces a  la base du donnes avec prisma .
    Séparation des responsabilités : chaque couche a un rôle précis.

Maintenance facile : les modifications des requêtes Prisma se font dans le Repository.

Réutilisation : plusieurs services peuvent utiliser les mêmes méthodes du Repository.

Tests faciles : on peut simuler le Repository sans accéder réellement à la base de données.

Flexibilité : on peut changer la manière d'accéder aux données sans modifier directement les Controllers.

tp7:

activité 2:

    Pourquoi email est-il @unique ?
    chaque utilisateur a un unique email.
    Pourquoi password est-il de type String ?

    Pourquoi le rôle est-il un enum ?
    Quelle valeur sera utilisée par défaut ?

insonia et postman

activité 6:
pour des reasons de securité en retourne le hash.

voici le token 
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWhtZWRAc2FuZ2Nvbm5lY3QudG4iLCJyb2xlIjoiQUdFTlRfQ0VOVFJFIiwiaWF0IjoxNzk0ODQxNDUxLCJleHAiOjE3OTQ4NDUwNTF9.WD95PI5S6Wj-9iIKUtpgogakgXUhwlgauTnUyJBe6JU","user":{"id":1,"nom":"Ahmed","email":"ahmed@sangconnect.tn","role":"AGENT_CENTRE"}}                                                                                      




















