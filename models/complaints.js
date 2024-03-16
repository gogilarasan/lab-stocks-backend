const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Complaint = sequelize.define('Complaint', {
        complaint_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        complainer_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complainer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dist_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Stocks',
                key: 'dist_id'
            }
        },
        lab_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Labs',
                key: 'lab_id'
            }
        }
    });

    return Complaint;
};
