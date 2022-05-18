module.exports= (sequelize,DataTypes) => {
    const Vehicule = sequelize.define("Vehicule",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        numero: {
            type: DataTypes.STRING
        },
        marque: {
            type: DataTypes.STRING
        },
        modele: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        }

    })
    return Vehicule;
}