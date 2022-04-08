///////////////////////   définition du schéma de données à insérer dans la base
const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema ({
    nom_menu:{type: String, required : true},
    resto_menu:{type: String, required : true},
    prix_menu:{type: Number, required : true},
    image_menu:{type: String, required : true},
});

module.exports = mongoose.model('Menu', MenuSchema);

const ClientSchema = mongoose.Schema ({
    login_clt:{type: String, required : true},
    password:{type: String, required : true}
});

module.exports = mongoose.model('Client', ClientSchema);