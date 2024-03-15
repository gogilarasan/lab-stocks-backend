const db = require('../models/database');

class LabController {
    static async createLab(db, labData) {
        try {
            const lab = await db.Lab.create(labData);
            return lab;
        } catch (error) {
            console.error('Error creating lab:', error);
            throw error;
        }
    }

    static async getLabById(db, labId) {
        try {
            const lab = await db.Lab.findByPk(labId);
            return lab;
        } catch (error) {
            console.error('Error getting lab by ID:', error);
            throw error;
        }
    }

    static async getAllLabs(db) {
        try {
            const labs = await db.Lab.findAll();
            return labs;
        } catch (error) {
            console.error('Error getting all labs:', error);
            throw error;
        }
    }

    static async updateLab(db, labId, labData) {
        try {
            await db.Lab.update(labData, {
                where: { lab_id: labId }
            });
            const updatedLab = await db.Lab.findByPk(labId);
            return updatedLab;
        } catch (error) {
            console.error('Error updating lab:', error);
            throw error;
        }
    }

    static async deleteLab(db, labId) {
        try {
            const lab = await db.Lab.findByPk(labId);
            if (lab) {
                await lab.destroy();
                return true;
            } else {
                console.error('Lab not found with ID:', labId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting lab:', error);
            throw error;
        }
    }
    
}

module.exports = LabController;
