const db = require('../models/database');
const id = require("shortid");

class TimetableController {
    static async createTimetable(db, obj) {
        try {
            const t_id = id.generate();

            obj.timetable_id = t_id;
            const timetable = await db.Timetable.create(obj);
            return timetable;
        } catch (error) {
            console.error('Error creating timetable:', error);
            throw error;
        }
    }


    static async getTimetableById(db, timetableId) {
        try {
            const timetable = await db.Timetable.findByPk(timetableId);
            return timetable;
        } catch (error) {
            console.error('Error getting timetable by ID:', error);
            throw error;
        }
    }

    static async getTimetableByLabId(db, lab_id) {
        try {
            const timetables = await db.Timetable.findAll({
                where: {
                    lab_id: lab_id
                }
            });
            return timetables;
        } catch (error) {
            console.error('Error getting timetable by lab ID:', error);
            throw error;
        }
    }

    static async getAllTimetables(db) {
        try {
            const timetables = await db.Timetable.findAll();
            return timetables;
        } catch (error) {
            console.error('Error getting all timetables:', error);
            throw error;
        }
    }

    static async updateTimetableById(timetableId, updatedData) {
        try {
            const [updatedRows] = await db.Timetable.update(updatedData, {
                where: { timetable_id: timetableId },
                returning: true // This ensures that the updated record is returned
            });

            if (updatedRows > 0) {
                // If at least one row was updated
                const updatedTimetable = await db.Timetable.findByPk(timetableId);
                return updatedTimetable;
            } else {
                // If no rows were updated (timetable not found)
                return null;
            }
        } catch (error) {
            console.error('Error updating timetable:', error);
            throw error;
        }
    }

    static async deleteTimetable(db, timetableId) {
        try {
            const timetable = await db.Timetable.findByPk(timetableId);
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
