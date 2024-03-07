const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const ResearchScholar = sequelize.define('ResearchScholar', {
        rs_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rs_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        seat_no: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tenure: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guide: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return ResearchScholar;
};
