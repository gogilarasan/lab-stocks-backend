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
    const stockId = req.body.stockId;
    try {
        const deletedStock = await obj.stock.deleteStock(db, stockId);
        if (deletedStock) {
            res.status(200).json({ "message": "Stock deleted successfully" });
        } else {
            res.status(404).json({ "error": "Stock not found" });
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
    const timetableId = req.body.timetableId;
    try {
        const deletedTimetable = await obj.timetable.deleteTimetable(db, timetableId);
        if (deletedTimetable) {
            res.status(200).json({ "message": "Timetable deleted successfully" });
        } else {
            res.status(404).json({ "error": "Timetable not found" });
        }
    } catch (error) {
        console.error('Error deleting timetable:', error);
        res.status(500).json({ "error": "Internal server error" });
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



module.exports = router;
