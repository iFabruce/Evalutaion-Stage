const  express = require("express");
const router = express.Router();
const frontController= require("../controllers/frontController")

router.get('/',frontController.vers_login_backoffice);
router.post('/login_backoffice',frontController.login_backoffice);
router.post('/ajout_vehicule',frontController.ajout_vehicule);
router.post('/login_frontoffice',frontController.login_frontoffice);
router.post('/ajout_trajet',frontController.ajout_trajet);
router.post('/ajout_echeance',frontController.ajout_echeance);

/***redirection***/
router.get('/vers_login_frontoffice',frontController.vers_login_frontoffice);
router.get('/vers_ajout_echeance',frontController.vers_ajout_echeance);
router.get('/vers_ajout_trajet',frontController.vers_ajout_trajet);







module.exports = router
