const {Admin,Vehicule,Utilisateur} = require("../models");

/*****REDIRECTION********/
const vers_login_backoffice = function(req,res) {
    res.render('login_backoffice')   
}
const vers_login_frontoffice = function(req,res) {
    res.render('login_frontoffice')   
}

/********TRAITEMENT*******/

const login_backoffice = async function(req,res) {
    Admin.findAll({
        where:{
            login: req.body.login,
            mdp: req.body.mdp
        }
    }).then(async result =>{
        if(result.length !=0){
            const vehicules = await Vehicule.findAll();
            res.render("accueil_backoffice",{vehicules});
        }else{
            res.render("login_backoffice",{erreur: "Vérifier votre identification et votre mot de passe..."});
            
        }
    })
}
const login_frontoffice = async function(req,res) {
    Utilisateur.findAll({
        where:{
            login: req.body.login,
            mdp: req.body.mdp
        }
    }).then(async result =>{
        if(result.length !=0){
            // const vehicules = await Vehicule.findAll();
            res.render("accueil_frontoffice");
        }else{
            res.render("login_frontoffice",{erreur: "Vérifier votre identification et votre mot de passe..."});
            
        }
    })
}
const ajout_vehicule = async function(req,res) {
    const ajout = await Vehicule.create({ 
        numero: req.body.numero,
        marque: req.body.marque,
        modele: req.body.modele,
        type: req.body.type
    });
    const vehicules = await Vehicule.findAll();
    const message = "Véhicule ajoutée"
    res.render('accueil_backoffice',{vehicules,message})
}



module.exports = {
    vers_login_backoffice,
    vers_login_frontoffice,
    login_backoffice,login_frontoffice,
    ajout_vehicule
}