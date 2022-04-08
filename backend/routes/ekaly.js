const express = require('express');
//const { route } = require('./user');
const router = express.Router();
//const Menu = require('../models/Menu'); /// importation de la methode Menu

const ekalyCtrl = require('../controllers/ekaly');

/////////////////       route pour inserer un objet dans la base
router.post('/', ekalyCtrl.createMenu);

/////////////// fin



/////////    création d'un root GET qui affichera des données du backend vers frontend l'appli front end  ///////////
/*
router.get('/api/ekaly', (req, res, next) => {
    const ekaly = [
        { "_id": { "$oid": "624ea072784e3a097f7c63db" }, "nom_menu": "menu_1_resto_1", "resto_menu": "resto_1", "prix_menu": { "$numberDouble": "2000.0" }, "image_menu": "sary1.jpg" },
        { "_id": { "$oid": "624ea0b7784e3a097f7c63dc" }, "nom_menu": "menu_2_resto_1", "resto_menu": "resto_1", "prix_menu": { "$numberDouble": "1500.0" }, "image_menu": "sary2.jpg" },
        { "_id": { "$oid": "624ea0c9784e3a097f7c63dd" }, "nom_menu": "menu_1_resto_2", "resto_menu": "resto_2", "prix_menu": { "$numberDouble": "500.0" }, "image_menu": "sary3.jpg" },
    ];
    res.status(200).json(ekaly);
});
*/
////////////////////////// fin /////////////////////////////

///////////// route pour modifier l'objet Menu
router.put('/:id', ekalyCtrl.modifyMenu);

////////// route pour suppression des données
router.delete('/:id', ekalyCtrl.deleteMenu);

/////////////////    route pour récuperer et afficher les données enregistrées
router.get('/:id', ekalyCtrl.getMenu);

router.get('/', ekalyCtrl.getToutMenu); 

//////////// route client
router.post('/', ekalyCtrl.createclient);
router.put('/:id', ekalyCtrl.modifyClient);
router.delete('/:id', ekalyCtrl.deleteClient);
router.get('/:id', ekalyCtrl.getClient);
router.get('/', ekalyCtrl.getToutClient);


module.exports = router;