///////////////////////   définition du schéma de données à insérer dans la base
const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema (
    {
    id_menu:{type: Number, required : true},
    nom_menu:{type: String, required : true},
    img_menu:{type: String, required : true},
    prix_menu:{type: Number, required : true},
    });

module.exports = mongoose.model('Menu', MenuSchema);

const ClientSchema = mongoose.Schema ({
    id_user:{type: Number, required : true},
    nom:{type: String, required : true},
    tel:{type: String, required : true},
    login:{type: String, required : true},
    password:{type: String, required : true},
    type:{type: String, required : true},
});

module.exports = mongoose.model('Client', ClientSchema);

const CommandeSchema = mongoose.Schema ({
    id_commande:{type: Number, required : true},
    id_menu:{type: Number, required : true},
    prix_commande:{type: Number, required : true},
    qte_commande:{type: Number, required : true},
    id_client:{type: Number, required : true}
});

module.exports = mongoose.model('Commande', CommandeSchema);

const LivraisonSchema = mongoose.Schema ({
    id_livraison:{type: Number, required : true},
    lieu_livraison:{type: String, required : true},
    id_commande:{type: Number, required : true},
    id_livreur:{type: Number, required : true}
});

module.exports = mongoose.model('Livraison', LivraisonSchema);