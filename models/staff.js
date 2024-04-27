const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Staff = sequelize.define('Staff', {
        staffid: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        staffname: {
            type: DataTypes.STRING,
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
    });

    return Staff;
};
