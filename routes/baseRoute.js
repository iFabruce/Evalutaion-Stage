const  express = require("express");
const router = express.Router();
const frontController= require("../controllers/frontController")

router.get('/',frontController.vers_login_backoffice);
router.post('/login_backoffice',frontController.login_backoffice);
router.post('/ajout_vehicule',frontController.ajout_vehicule);
router.get('/vers_login_frontoffice',frontController.vers_login_frontoffice);
router.post('/login_frontoffice',frontController.login_frontoffice);





module.exports = router
