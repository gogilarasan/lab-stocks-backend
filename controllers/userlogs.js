const db = require('../models/database');

class UserLogsController {
    static async createUserLog(db, userLogData) {
        try {
            const userLog = await db.UserLogs.create(userLogData);
            return userLog;
        } catch (error) {
            console.error('Error creating user log:', error);
            throw error;
        }
    }

    static async getUserLogById(db, userLogId) {
        try {
            const userLog = await db.UserLogs.findByPk(userLogId);
            return userLog;
        } catch (error) {
            console.error('Error getting user log by ID:', error);
            throw error;
        }
    }

    static async getAllUserLogs(db) {
        try {
            const userLogs = await db.UserLogs.findAll();
            return userLogs;
        } catch (error) {
            console.error('Error getting all user logs:', error);
            throw error;
        }
    }

    static async updateUserLog(db, userLogId, userLogData) {
        try {
            await db.UserLogs.update(userLogData, {
                where: { id: userLogId }
            });
            const updatedUserLog = await db.UserLogs.findByPk(userLogId);
            return updatedUserLog;
        } catch (error) {
            console.error('Error updating user log:', error);
            throw error;
        }
    }

    static async deleteUserLog(db, userLogId) {
        try {
            const userLog = await db.UserLogs.findByPk(userLogId);
            if (userLog) {
                await userLog.destroy();
                return true;
            } else {
                console.error('User log not found with ID:', userLogId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting user log:', error);
            throw error;
        }
    }
}

module.exports = UserLogsController;
