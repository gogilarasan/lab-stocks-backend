const { DataTypes } = require('sequelize');


module.exports = (sequelize, Sequelize) => {
    const Complaint = sequelize.define('Complaint', {
        complaint_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            
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
