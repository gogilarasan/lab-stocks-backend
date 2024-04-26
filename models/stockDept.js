const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const StockDept = sequelize.define('StockDept', {
        stockd_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
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
        issued: {
            type: DataTypes.STRING(500),
            allowNull: false,
            references: 
                {
                    model: 'Staffs',
                    key: 'staffid'
                }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return StockDept;
};
