const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define('Todo', {
        task_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        task_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed'),
            allowNull: false,
            defaultValue: 'pending'
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        complainer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dist_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'Stocks',
                key: 'dist_id'
            }
        },
        lab_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'Labs',
                key: 'lab_id'
            }
        }
    });

    return Todo;
};
