const db = require('../models/database');
const { Op } = require('sequelize');


class UserLogsController {
    static async createUserLog(db, userLogData) {
        try {
            const userLog = await db.Userlog.create(userLogData);
            return userLog;
        } catch (error) {
            console.error('Error creating user log:', error);
            throw error;
        }
    }
    static async getUserLogById(db, userLogId) {
        try {
            const userLog = await db.Userlog.findByPk(userLogId);
            if (userLog) {
                return userLog;
            } else {
                throw new Error('User log not found');
            }
        } catch (error) {
            console.error('Error getting user log by ID:', error);
            throw error;
        }
    }
    
    static async getUserLogBySeatNo(db, seatNo) {
        try {
            const userlogs = await db.Userlog.findAll({ where: { sysseat: seatNo } });
            return userlogs;
        } catch (error) {
            console.error('Error getting user logs by seat number:', error);
            throw error;
        }
    }

    static async deleteUserLogsWithinDateRange(db, startDate, endDate) {
        try {
            const deletedCount = await db.Userlog.destroy({
                where: {
                    date: {
                        [Op.between]: [startDate, endDate]
                    }
                }
            });
            return deletedCount;
        } catch (error) {
            console.error('Error deleting userlogs within date range:', error);
            throw error;
        }
    }

    static async getUserLogsByLabId(db, labId) {
        try {
            const userLogs = await db.Userlog.findAll({ where: { labid: labId } });
            return userLogs;
        } catch (error) {
            console.error('Error getting user logs by lab ID:', error);
            throw error;
        }
    }

}

module.exports = UserLogsController;
