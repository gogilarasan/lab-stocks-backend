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
        }
    });

    // Define association with Stock model
    Complaint.belongsTo(sequelize.models.Stock, { foreignKey: 'dist_id', allowNull: false });

    // Define association with Lab model
    Complaint.belongsTo(sequelize.models.Lab, { foreignKey: 'lab_id', allowNull: false });

    return Complaint;
};
