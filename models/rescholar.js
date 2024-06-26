const { DataTypes } = require('sequelize');


module.exports = (sequelize, Sequelize) => {
    const ResearchScholar = sequelize.define('ResearchScholar', {
        rs_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique:true,
        },
        rs_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tenure: {
            type: DataTypes.DATE,
            allowNull: false
        },
        distid: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'Stocks',
                key: 'dist_id'
            }
        },      
        staff_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Staffs',
                key: 'staffid'
            }
        }
    });

    return ResearchScholar;
};
