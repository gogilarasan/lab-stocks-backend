const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Timetable = sequelize.define('Timetable', {
        timetable_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            
        },
        lab_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Labs',
                key: 'lab_id'
            }
        },
        subject_id: {
            type: DataTypes.STRING,
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
            allowNull: false,
            references: {
                model: 'Staffs',
                key: 'staffid'
            }
        }
    });

    return Timetable;
};
