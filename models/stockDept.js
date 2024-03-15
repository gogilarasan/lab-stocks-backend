const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const StockDept = sequelize.define('StockDept', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stockRegisterPageNo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stockRegisterSlNo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookFigureQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookStockValueRs: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        issuedToRemarks: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return StockDept;
};
