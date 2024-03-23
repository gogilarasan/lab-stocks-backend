const express = require("express");
const db = require('../models/database');
const obj = require("../controllers/obj");

const router = express.Router();

router.use(express.json());

router.post('/delete_lab', async (req, res) => {
    const labId = req.body.labId;
    try {
        const deletedLab = await obj.lab.deleteLab(db, labId);
        if (deletedLab) {
            res.status(200).json({ "message": "Lab deleted successfully" });
        } else {
            res.status(404).json({ "error": "Lab not found" });
        }
    } catch (error) {
        console.error('Error deleting lab:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/delete_stock', async (req, res) => {
    const stockId = req.body.stock_id; // Assuming the request body contains the stock_id to be deleted
    try {
        // Call the deleteStock method from the StockController to delete the stock
        const deletedStock = await obj.stock.deleteStock(db, stockId);
        if (deletedStock) {
            res.status(200).json({ "message": "Stock deleted successfully" });
        } else {
            res.status(404).json({ "error": "Stock not found" });
        }
    } catch (error) {
        console.error('Error deleting stock: One stafff is using is dist printed stock', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/delete_stock_by_dist_id', async (req, res) => {
    const distId = req.body.dist_id;
    try {
        const deletedStock = await  obj.stock.deleteStockByDistId(db, distId);
        if (deletedStock) {
            res.status(200).json({ "message": "Stock deleted successfully" });
        } else {
            res.status(404).json({ "error": "Stock not found with dist_id" });
        }
    } catch (error) {
        console.error('Error deleting stock:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/delete_stock_dept', async (req, res) => {
    const deptId = req.body.deptId;
    try {
        const deletedDept = await obj.stockdept.deleteStockDept(deptId);
        if (deletedDept) {
            res.status(200).json({ "message": "Stock department deleted successfully" });
        } else {
            res.status(404).json({ "error": "Stock department not found" });
        }
    } catch (error) {
        console.error('Error deleting stock department:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/delete_staff', async (req, res) => {
    const staffId = req.body.staffId;
    try {
        const deletedStaff = await obj.staff.deleteStaff(db,staffId);
        if (deletedStaff) {
            res.status(200).json({ "message": "Staff deleted successfully" });
        } else {
            res.status(404).json({ "error": "Staff not found" });
        }
    } catch (error) {
        console.error('Error deleting staff:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/delete_timetable', async (req, res) => {
    const { timetable_id } = req.body;

    try {
        const deleted = await obj.timetable.deleteTimetable(db,timetable_id);

        if (deleted) {
            res.status(200).json({ message: 'Timetable deleted successfully' });
        } else {
            res.status(404).json({ error: 'Timetable not found' });
        }
    } catch (error) {
        console.error('Error deleting timetable:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/delete_research_scholar', async (req, res) => {
    const scholarId = req.body.scholarId;
    try {
        const deletedScholar = await obj.rs.deleteResearchScholar(db,scholarId);
        if (deletedScholar) {
            res.status(200).json({ "message": "Research scholar deleted successfully" });
        } else {
            res.status(404).json({ "error": "Research scholar not found" });
        }
    } catch (error) {
        console.error('Error deleting research scholar:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/delete_userlogs_within_date_range', async (req, res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    try {
        const deletedCount = await obj.Userlog.deleteUserLogsWithinDateRange(db, startDate, endDate);
        res.status(200).json({ message: `${deletedCount} user logs deleted successfully` });
    } catch (error) {
        console.error('Error deleting user logs within date range:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.delete('/delete_complaint', async (req, res) => {
    try {
        const complaintId = req.body.complaint_id;
        const deleted = await obj.complaint.deleteComplaint(db, complaintId);
        
        if (deleted) {
            res.status(200).json({ message: "Complaint deleted successfully" });
        } else {
            console.error('Complaint not found with ID:', complaintId);
            res.status(404).json({ error: "Complaint not found" });
        }
    } catch (error) {
        console.error('Error deleting complaint:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
