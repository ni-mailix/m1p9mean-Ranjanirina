//////////////   importation de l'application express     /////////////
const express = require('express');  //// importation
const mongoose = require('mongoose'); // importation du package mongoose qui crée et facilite la connexion avec la base de données mongoDB
const bodyParser = require('body-parser');
const app = express(); //// affectation du constante app avec la valeur de la variable express()
const userRoutes = require('./routes/user');

const ekalyRoutes = require('./routes/ekaly');

mongoose.connect('mongodb+srv://ranja:ranja@cluster0.gpy1s.mongodb.net/ekaly?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());

app.use ('/api/ekaly',ekalyRoutes); 

app.use(express.json()); // ceci gère la requete POST venant de frontend

app.set('port', process.env.PORT || 3000);  // affectation du port 3000 à l'application app
/*
app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });
*/


const cors = require('cors');
app.use(cors());


///////////// methode CORS qui permet de communiquer 2 port différents dans l'appli   //////////////
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
////////////////////     fin //////////////////////////


/////////////// creation de post
/*
app.post('/api/ekaly', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
});
*/

app.use('/api/auth', userRoutes);  /// utilisation de la racine d'authentification de front end

module.exports = app; //// export de app pour qu'il puisse être utilisé

