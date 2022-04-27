const Menu =  require('../models/Thing');
const Client = require ('../models/Thing');
const Commande = require ('../models/Thing');
const Livraison = require ('../models/Thing');

////////////////////////////  menu   /////////////////////
exports.createMenu = (req, res, next) => {
    delete req.body._id;
    const Menu1 = new Menu({
        ...req.body
    });
    Menu1.save()
        .then(() => res.status(201).json({ message: 'menu enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyMenu = (req, res, next) => {
    Menu.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteMenu = (req, res, next) => {
    Menu.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getMenu = (req, res, next) => {
    Menu.findOne({ _id: req.params.id })    //// methode pour trouver un objet
        .then(Menu => res.status(200).json(Menu))
        .catch(error => res.status(404).json({ error }) );
};

exports.getToutMenu = (req, res, next) => {
    Menu.find()  //// methode pour trouver tous les objets
        .then(Menu => res.status(200).json(Menu))
        .catch(error => res.status(400).json({ error }));
};

//////////////////////    client   ////////////////
exports.createclient = (req, res, next) => {

    delete req.body._id;
    const Client1 = new Client({
        ...req.body
    });
    Client1.save()
        .then(() => res.status(201).json({ message: 'Client enregistré !' }))
        .catch(error => res.status(400).json({ error, message :'misy erreur' }));

};

exports.modifyClient = (req, res, next) => {
    Client.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Client modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteClient = (req, res, next) => {
    Client.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Client supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getClient = (req, res, next) => {
    Client.findOne({ _id: req.params.id })    //// methode pour trouver un objet
        .then(Client => res.status(200).json(Client))
        .catch(error => res.status(404).json({ error }));
};

exports.getToutClient = (req, res, next) => {
    Client.find()  //// methode pour trouver tous les objets
        .then(Client => res.status(200).json(Client))
        .catch(error => res.status(400).json({ error }));
};

////////////////////////////  livraison   /////////////////////
exports.createlivraison = (req, res, next) => {
    delete req.body._id;
    const Livraison1 = new Livraison({
        ...req.body
    });
    Livraison1.save()
        .then(() => res.status(201).json({ message: 'livraison enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyLivraison = (req, res, next) => {
    Livraison.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Livraison modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteLivraison = (req, res, next) => {
    Livraison.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getLivraison = (req, res, next) => {
    Livraison.findOne({ _id: req.params.id })    //// methode pour trouver un objet
        .then(Livraison => res.status(200).json(Livraison))
        .catch(error => res.status(404).json({ error }));
};

exports.getToutLivraison = (req, res, next) => {
    Livraison.find()  //// methode pour trouver tous les objets
        .then(Livraison => res.status(200).json(Livraison))
        .catch(error => res.status(400).json({ error }));
};

////////////////////////////  Commande   /////////////////////
exports.createCommande = (req, res, next) => {
    delete req.body._id;
    const Commande1 = new Commande({
        ...req.body
    });
    Commande1.save()
        .then(() => res.status(201).json({ message: 'Commande enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyCommande = (req, res, next) => {
    Commande.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteCommande = (req, res, next) => {
    Commande.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getCommande = (req, res, next) => {
    Commande.findOne({ _id: req.params.id })    //// methode pour trouver un objet
        .then(Commande => res.status(200).json(Commande))
        .catch(error => res.status(404).json({ error }));
};

exports.getToutCommande = (req, res, next) => {
    Commande.find()  //// methode pour trouver tous les objets
        .then(Commande => res.status(200).json(Commande))
        .catch(error => res.status(400).json({ error }));
};