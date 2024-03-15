const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define('Stock', {
        stock_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dist_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        seat_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        incharge: {
            type: DataTypes.STRING,
            allowNull: false
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lab_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Labs', 
                key: 'lab_id'
            }
        }
    });

    return Stock;
};
