const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Lab = sequelize.define('Lab', {
        lab_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lab_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lab_incharge: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpu_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mouse_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monitor_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        keyboard_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        backup_stocks: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Lab;
};
