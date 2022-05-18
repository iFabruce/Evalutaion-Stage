const  express = require("express");
const router = express.Router();
const frontController= require("../controllers/frontController")

router.get('/',frontController.vers_login_backoffice);
router.post('/login_backoffice',frontController.login_backoffice);
router.post('/ajout_vehicule',frontController.ajout_vehicule);
router.post('/login_frontoffice',frontController.login_frontoffice);
router.post('/ajout_trajet',frontController.ajout_trajet);
router.post('/ajout_echeance',frontController.ajout_echeance);
router.post('/modification_echeance',frontController.modification_echeance);


/***redirection***/
router.get('/deco_frontoffice',frontController.deco_frontoffice);
router.get('/deco_backoffice',frontController.deco_backoffice);

router.get('/vers_login_frontoffice',frontController.vers_login_frontoffice);

router.get('/vers_ajout_echeance',frontController.vers_ajout_echeance);
router.get('/vers_ajout_trajet',frontController.vers_ajout_trajet);
router.get('/vers_modification_echeance/:id',frontController.vers_modification_echeance);
router.get('/vers_liste_echeance',frontController.vers_liste_echeance);











module.exports = router
