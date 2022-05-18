module.exports= (sequelize,DataTypes) => {
    const Admin = sequelize.define("Admin",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        login: {
            type: DataTypes.STRING
        },
        mdp: {
            type: DataTypes.STRING
        }

    })
    return Admin;
}