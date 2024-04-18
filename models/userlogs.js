const { DataTypes } = require('sequelize');
const { Op } = require('sequelize');


module.exports = (sequelize, Sequelize) => {
    const userlogs = sequelize.define('Userlog', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        labid: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Labs',
                key: 'lab_id'
            }
        },
        sysseat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        distid: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model : "Stocks",
                key: "dist_id"

            }
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
    /*exit_time: {
            type: DataTypes.TIME,
            allowNull: true
        },*/
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        timetable_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'Timetables',
                key: 'timetable_id'
            }
        }
    });

    return userlogs;
};
