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
            allowNull: false
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
            allowNull: true // Remarks can be nullable
        },
        stock_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Define association with Lab model
    Stock.belongsTo(sequelize.models.Lab, { foreignKey: 'lab_id', allowNull: false });

    return Stock;
};
