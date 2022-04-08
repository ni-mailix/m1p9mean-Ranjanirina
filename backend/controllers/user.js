////// pour les inscriptions
const bcrypt = require('bcrypt');   /// importation du package de cryptage mdp
const jwt = require('jsonwebtoken'); 

const User = require('../models/user'); // importation du model user pour être utilisé dans la creation

///// utilisation du fonction signup avec comme réponse l'adresse email et le mot de passe enregistré
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()    //// sauvegarde dans la base
                .then(() => res.status(201).json({ message: 'Utilisateur crée' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


/// pour l'indentification
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })   // trouver l'email correspondant à sign in
        .then(user => {
            if (!user) {   //// si email trouvé0
                return res.status(401).json({ error: 'utiliateur non trouvé' });
            }
            bcrypt.compare(req.body.password, user.password)  /// si email trouver, comparer mdp
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe erronée' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({userId : user._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn :'24h'})
                    });
                })
                .catch(error => res.status(500).json({error}));
        })
.catch(error => res.status(500).json({error}));
};