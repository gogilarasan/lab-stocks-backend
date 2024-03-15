const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Timetable = sequelize.define('Timetable', {
        timetable_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lab_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Labs',
                key: 'lab_id'
            }
        },
        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subject_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        day: {
            type: DataTypes.STRING,
            allowNull: false
        },
        session_type: {
            type: DataTypes.ENUM('FN', 'AN'),
            allowNull: false
        },
        timings: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subject_teacher: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Timetable;
};
