module.exports= (sequelize,DataTypes) => {
    const Echeance = sequelize.define("Echeance",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        id_vehicule:{
            type: DataTypes.INTEGER,
            // references:{
            //     model: 'vehicules',
            //     key: 'id'
            // }
        },
        type: {
            type: DataTypes.STRING
        },
        date_ajout:{
            type: DataTypes.DATEONLY
        },
        date_expiration:{
            type: DataTypes.DATEONLY
        },
        duree: {
            type: DataTypes.INTEGER
        }
       

    })
    return Echeance;
}