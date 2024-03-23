const db = require('../models/database');
const id = require("shortid");

class ResearchScholarController {
    static async createResearchScholar(db, obj) {
        try {
            const r_id = id.generate();
            obj.rs_id = r_id;
            const researchScholar = await db.Rescholar.create(obj);
            return researchScholar;
        } catch (error) {
            console.error('Error creating research scholar:', error);
            throw error;
        }
    }

    static async getResearchScholarById(db, rsId) {
        try {
            const researchScholar = await db.Rescholar.findByPk(rsId);
            return researchScholar;
        } catch (error) {
            console.error('Error getting research scholar by ID:', error);
            throw error;
        }
    }

    static async getAllResearchScholars(db) {
        try {
            const researchScholars = await db.Rescholar.findAll();
            return researchScholars;
        } catch (error) {
            console.error('Error getting all research scholars:', error);
            throw error;
        }
    }

    static async updateResearchScholar(db, rsId, rsData) {
        try {
            const updatedRows = await db.Rescholar.update(rsData, {
                where: { rs_id: rsId }
            });
    
            if (updatedRows[0] === 1) {
                const updatedResearchScholar = await db.Rescholar.findByPk(rsId);
                return updatedResearchScholar;
            } else {
                throw new Error('Research scholar not found or not updated');
            }
        } catch (error) {
            console.error('Error updating research scholar:', error);
            throw error;
        }
    }
    

    static async deleteResearchScholar(db, rsId) {
        try {
            const researchScholar = await db.Rescholar.findByPk(rsId);
            if (researchScholar) {
                await researchScholar.destroy();
                return true;
            } else {
                console.error('Research scholar not found with ID:', rsId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting research scholar:', error);
            throw error;
        }
    }
}

module.exports = ResearchScholarController;
