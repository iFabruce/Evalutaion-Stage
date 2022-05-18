const {Admin,Vehicule,Utilisateur,Trajet,Echeance, sequelize} = require("../models");

/*****REDIRECTION********/
const deco_frontoffice =  function(req,res) {
    res.render('login_frontoffice')   
}
const deco_backoffice =  function(req,res) {
    res.render('login_backoffice')   
}
const vers_liste_echeance = async function(req,res) {
    const sql= 'SELECT e.id as id,v.marque as marque,v.numero as numero,v.modele as modele,v.type as type_vehicule,e.type as type,e.date_expiration as date_expiration,e.date_ajout as date_ajout,e.duree as duree FROM "Echeances" e JOIN "Vehicules" v ON v.id = e.id_vehicule order by duree'
    const [echeances, metadata] = await sequelize.query(sql);
    res.render('liste_echeance',{echeances})   
}
const vers_modification_echeance = async function(req,res) {
    const echeance = await Echeance.findAll({
        where:{
            id: req.params.id
        }
    })
    console.log(echeance)
    const vehicules = await Vehicule.findAll();
    res.render('modification_echeance',{vehicules,echeance})   
}
const vers_ajout_echeance = async function(req,res) {
    const vehicules = await Vehicule.findAll();
    res.render('ajout_echeance',{vehicules})   
}
const vers_login_backoffice = function(req,res) {
    res.render('login_backoffice')   
}
const vers_login_frontoffice = function(req,res) {
    res.render('login_frontoffice')   
}
const vers_ajout_trajet = function(req,res) {
    res.render('accueil_frontoffice')   
}

/*******TRAITEMENT******/
const modification_echeance = async function(req,res) {
    const id_vehicule =req.body.id_vehicule
    const type= req.body.type
    const date_ajout= req.body.date_ajout
    const date_expiration= req.body.date_expiration
     
    const sql = `UPDATE "Echeances" SET id_vehicule=${id_vehicule},type='${type}',date_ajout='${date_ajout}',date_expiration='${date_expiration}',duree=date_part('day','${date_expiration}'-now()) where id = ${req.body.id} ` 
    console.log(sql);
    const query = await sequelize.query(sql)
    const vehicules = await Vehicule.findAll();

    const message = "Echéance modifié"
    const sql2= 'SELECT e.id as id,v.marque vehicule,e.type as type,e.date_expiration as date_expiration,e.date_ajout as date_ajout,e.duree as duree FROM "Echeances" e JOIN "Vehicules" v ON v.id = e.id_vehicule order by duree'
    const [echeances, metadata] = await sequelize.query(sql2);   
    res.render('ajout_echeance',{message,vehicules,echeances})
}

const ajout_echeance = async function(req,res) {
    const id_vehicule =req.body.id_vehicule
    const type= req.body.type
    const date_ajout= req.body.date_ajout
    const date_expiration= req.body.date_expiration
     
    const sql = `INSERT INTO "Echeances" VALUES (default,${id_vehicule},'${type}','${date_ajout}','${date_expiration}',date_part('day','${date_expiration}'-now()),now(),now()) ` 
    console.log(sql);
    const query = await sequelize.query(sql)
    const vehicules = await Vehicule.findAll();

    const message = "Echéance ajouté"
    const sql2= 'SELECT e.id as id,v.marque vehicule,e.type as type,e.date_expiration as date_expiration,e.date_ajout as date_ajout,e.duree as duree FROM "Echeances" e JOIN "Vehicules" v ON v.id = e.id_vehicule'
    const [echeances, metadata] = await sequelize.query(sql2);   
    res.render('ajout_echeance',{message,vehicules,echeances})
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
            res.render("login_backoffice",{erreur: "Vérifier votre identifiant et votre mot de passe..."});
            
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
            res.render("login_frontoffice",{erreur: "Vérifier votre identifiant et votre mot de passe..."});
            
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
    vers_ajout_trajet,
    vers_modification_echeance,
    modification_echeance,
    vers_liste_echeance,
    deco_frontoffice,
    deco_backoffice
    
}