module.exports= (sequelize,DataTypes) => {
    const Utilisateur = sequelize.define("Utilisateur",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        nom:{
            type: DataTypes.STRING
        },
        login: {
            type: DataTypes.STRING
        },
        mdp: {
            type: DataTypes.STRING
        }

    })
    return Utilisateur;
}