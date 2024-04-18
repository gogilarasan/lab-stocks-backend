const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const StockDept = sequelize.define('StockDept', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stockRegisterPageNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stockRegisterSlNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookFigureQuantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookStockValueRs: {
            type: DataTypes.STRING,
            allowNull: true
        },
        issuedToRemarks: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return StockDept;
};
