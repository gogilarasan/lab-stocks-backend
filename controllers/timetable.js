const db = require('../models/database');

class TimetableController {
    static async createTimetable(db, timetableData) {
        try {
            const timetable = await db.TimeTable.create(timetableData);
            return timetable;
        } catch (error) {
            console.error('Error creating timetable:', error);
            throw error;
        }
    }
    

    static async getTimetableById(db, timetableId) {
        try {
            const timetable = await db.TimeTable.findByPk(timetableId);
            return timetable;
        } catch (error) {
            console.error('Error getting timetable by ID:', error);
            throw error;
        }
    }

    static async getAllTimetables(db) {
        try {
            const timetables = await db.TimeTable.findAll();
            return timetables;
        } catch (error) {
            console.error('Error getting all timetables:', error);
            throw error;
        }
    }

    static async updateTimetable(db, timetableId, timetableData) {
        try {
            await db.TimeTable.update(timetableData, {
                where: { timetable_id: timetableId }
            });
            const updatedTimetable = await db.TimeTable.findByPk(timetableId);
            return updatedTimetable;
        } catch (error) {
            console.error('Error updating timetable:', error);
            throw error;
        }
    }

    static async deleteTimetable(db, timetableId) {
        try {
            const timetable = await db.TimeTable.findByPk(timetableId);
            if (timetable) {
                await timetable.destroy();
                return true;
            } else {
                console.error('Timetable not found with ID:', timetableId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting timetable:', error);
            throw error;
        }
    }
}

module.exports = TimetableController;
