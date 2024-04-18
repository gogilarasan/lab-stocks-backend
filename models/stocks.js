const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define('Stock', {
        stock_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            
        },
        dist_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        seat_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lab_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'Labs', 
                key: 'lab_id'
            }
        },
        cpu: {
            type:DataTypes.STRING,
            allowNull:true
        }
    });

    return Stock;
};
