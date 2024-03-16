const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const UserLogs = sequelize.define('UserLogs', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        labname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        labid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sysseat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        distid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rollno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entry_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        exit_time: {
            type: DataTypes.TIME,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        timetable_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Timetables',
                key: 'timetable_id'
            }
        }
    });

    return UserLogs;
};
