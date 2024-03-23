const id = require('shortid');
const db = require('../models/database');

class ComplaintController {
    static async createComplaint(db, obj) {
        try {
            const c_id = id.generate();
            obj.complaint_id = c_id;
            const complaint = await db.Complaint.create(obj);
            return complaint;
        } catch (error) {
            console.error('Error creating complaint:', error);
            throw error;
        }
    }

    static async getComplaintById(db, complaintId) {
        try {
            const complaint = await db.Complaint.findByPk(complaintId);
            return complaint;
        } catch (error) {
            console.error('Error getting complaint by ID:', error);
            throw error;
        }
    }

    static async getAllComplaints(db) {
        try {
            const complaints = await db.Complaint.findAll();
            return complaints;
        } catch (error) {
            console.error('Error getting all complaints:', error);
            throw error;
        }
    }

    static async updateComplaint(db, complaintId, complaintData) {
        try {
            await db.Complaint.update(complaintData, {
                where: { complaint_id: complaintId }
            });
            const updatedComplaint = await db.Complaint.findByPk(complaintId);
            return updatedComplaint;
        } catch (error) {
            console.error('Error updating complaint:', error);
            throw error;
        }
    }

    static async deleteComplaint(db, complaintId) {
        try {
            const complaint = await db.Complaint.findByPk(complaintId);
            if (complaint) {
                await complaint.destroy();
                return true;
            } else {
                console.error('Complaint not found with ID:', complaintId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting complaint:', error);
            throw error;
        }
    }
}

module.exports = ComplaintController;
