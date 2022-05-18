const {Admin,Vehicule,Utilisateur,Trajet,Echeance, sequelize} = require("../models");

/*****REDIRECTION********/
const vers_login_backoffice = function(req,res) {
    res.render('login_backoffice')   
}
const vers_login_frontoffice = function(req,res) {
    res.render('login_frontoffice')   
}
const vers_ajout_echeance = async function(req,res) {
    const vehicules = await Vehicule.findAll();
    res.render('ajout_echeance',{vehicules})   
}
const vers_ajout_trajet = function(req,res) {
    res.render('accueil_frontoffice')   
}



/********TRAITEMENT*******/
const ajout_echeance = async function(req,res) {
    const date_now = sequelize.fn('DATE',sequelize.fn('NOW'))
    const echeance = await Echeance.create({ 
        id_vehicule: req.body.id_vehicule,
        type: req.body.type,
        date_ajout: req.body.date_ajout,
        date_expiration: req.body.date_expiration,
        duree: sequelize.fn('date_part','day',sequelize.fn('DATE',sequelize.fn('NOW')))
    });
    const message = "Echéance ajouté"
    res.render('ajout_echeance',{message})
}


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
            const vehicules = await Vehicule.findAll();
            res.render("accueil_frontoffice",{vehicules});
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
        // modele: sequelize.fn('DATE',sequelize.fn('NOW')),
        type: req.body.type,
        
    });
    const vehicules = await Vehicule.findAll();
    const message = "Véhicule ajoutée"
    res.render('accueil_backoffice',{vehicules,message})
}
const ajout_trajet = async function(req,res) {
    const dateheure_depart = req.body.date_depart+" "+req.body.heure_depart
    const dateheure_arrive = req.body.date_arrive+" "+req.body.heure_arrive
    const trajet = await Trajet.create({ 
        date_depart: dateheure_depart,
        lieu_depart: req.body.lieu_depart,
        kilometrage_depart: req.body.kilometrage_depart,
        date_arrive: dateheure_arrive,
        lieu_arrive: req.body.lieu_arrive,
        kilometrage_arrive: req.body.kilometrage_arrive,
        litre_carburant: req.body.litre_carburant,
        montant_carburant: req.body.montant_carburant
    });
    const message = "Trajet ajouté"
    res.render('accueil_frontoffice',{message})
}



module.exports = {
    vers_login_backoffice,
    vers_login_frontoffice,
    vers_ajout_echeance,
    login_backoffice,login_frontoffice,
    ajout_vehicule,
    ajout_trajet,
    ajout_echeance,
    vers_ajout_trajet
}