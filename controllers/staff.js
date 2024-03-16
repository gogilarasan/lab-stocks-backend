const db = require('../models/database');

class StaffController {
    static async createStaff(db, staffData) {
        try {
            const staff = await db.Staff.create(staffData);
            return staff;
        } catch (error) {
            console.error('Error creating staff:', error);
            throw error;
        }
    }

    static async getStaffById(db, staffId) {
        try {
            const staff = await db.Staff.findByPk(staffId);
            return staff;
        } catch (error) {
            console.error('Error getting staff by ID:', error);
            throw error;
        }
    }

    static async getAllStaffs(db) {
        try {
            const staffs = await db.Staff.findAll();
            return staffs;
        } catch (error) {
            console.error('Error getting all staffs:', error);
            throw error;
        }
    }

    static async updateStaff(db, staffId, staffData) {
        try {
            await db.Staff.update(staffData, {
                where: { staffid: staffId }
            });
            const updatedStaff = await db.Staff.findByPk(staffId);
            return updatedStaff;
        } catch (error) {
            console.error('Error updating staff:', error);
            throw error;
        }
    }

    static async deleteStaff(db, staffId) {
        try {
            const staff = await db.Staff.findByPk(staffId);
            if (staff) {
                await staff.destroy();
                return true;
            } else {
                console.error('Staff not found with ID:', staffId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting staff:', error);
            throw error;
        }
    }
}

module.exports = StaffController;
