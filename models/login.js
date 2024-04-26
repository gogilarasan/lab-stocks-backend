const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Login = sequelize.define('Login', {

        loginid:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
    
        email:{
            type : DataTypes.STRING,
            allowNull : false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });

    return Login;
};
