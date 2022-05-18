
module.exports= (sequelize,DataTypes) => {
    const Trajet = sequelize.define("Trajet",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        date_depart: {
            type: DataTypes.DATE
        },
        lieu_depart: {
            type: DataTypes.STRING
        },
        kilometrage_depart: {
            type: DataTypes.DOUBLE
        },
        date_arrive: {
            type: DataTypes.DATE
        },
        lieu_arrive: {
            type: DataTypes.STRING
        },
        kilometrage_arrive: {
            type: DataTypes.DOUBLE
        },
        montant_carburant:{
            type: DataTypes.DOUBLE
        },
        litre_carburant:{
            type: DataTypes.DOUBLE
        }
    })
    return Trajet;
}