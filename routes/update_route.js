const express = require("express");
const db = require('../models/database');
const obj = require("../controllers/obj");

const router = express.Router();

router.use(express.json());

router.post('/update_lab', async (req, res) => {
    const labId = req.body.lab_id;
    const labData = req.body;
    try {
        const updatedLab = await obj.lab.updateLab(db, labId, labData);
        if (updatedLab) {
            res.status(200).json({ "message": "Lab updated successfully" });
        } else {
            res.status(404).json({ "error": "Lab not found" });
        }
    } catch (error) {
        console.error('Error updating lab:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/update_stock', async (req, res) => {
    const stockId = req.body.stock_id;
    const stockData = req.body;
    try {
        const updatedStock = await obj.stock.updateStock(db, stockId, stockData);
        if (updatedStock) {
            res.status(200).json({ "message": "Stock updated successfully" });
        } else {
            res.status(404).json({ "error": "Stock not found" });
        }
    } catch (error) {
        console.error('Error updating stock:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/update_stock_dept', async (req, res) => {
    const deptId = req.body.deptId;
    const deptData = req.body;
    try {
        const updatedDept = await obj.stockdept.updateStockDept(deptId, deptData);
        if (updatedDept) {
            res.status(200).json({ "message": "Stock department updated successfully" });
        } else {
            res.status(404).json({ "error": "Stock department not found" });
        }
    } catch (error) {
        console.error('Error updating stock department:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/update_staff', async (req, res) => {
    const staffId = req.body.staffId;
    const updatedData = req.body;
    try {
        const updatedStaff = await obj.staff.updateStaff(db, staffId, updatedData);
        if (updatedStaff) {
            res.status(200).json({ "message": "Staff updated successfully", "data": updatedStaff });
        } else {
            res.status(404).json({ "error": "Staff not found" });
        }
    } catch (error) {
        console.error('Error updating staff:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/update_timetable', async (req, res) => {
    const { timetable_id, lab_id, subject_id, subject_name, day, session_type, timings, subject_teacher } = req.body;

    try {
        const updatedTimetable = await obj.timetable.updateTimetableById(timetable_id, { lab_id, subject_id, subject_name, day, session_type, timings, subject_teacher });

        if (updatedTimetable) {
            res.status(200).json({ message: 'Timetable updated successfully', data: updatedTimetable });
        } else {
            res.status(404).json({ error: 'Timetable not found' });
        }
    } catch (error) {
        console.error('Error updating timetable:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



router.post('/update_research_scholar', async (req, res) => {
    const rsId = req.body.rs_id;
    const rsData = req.body;
    try {
        const updatedScholar = await obj.rs.updateResearchScholar(db, rsId, rsData);
        if (updatedScholar) {
            res.status(200).json({ "message": "Research scholar updated successfully", "data": updatedScholar });
        } else {
            res.status(404).json({ "error": "Research scholar not found" });
        }
    } catch (error) {
        console.error('Error updating research scholar:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.put('/update_todo_status', async (req, res) => {
    try {
        const { taskId, status } = req.body;

        // Check if taskId and status are provided
        if (!taskId || !status) {
            return res.status(400).json({ error: "Task ID and status are required" });
        }

        // Check if status is valid
        if (!['pending', 'completed'].includes(status)) {
            return res.status(400).json({ error: "Invalid status" });
        }

        // Update todo status
        const updatedTodo = await obj.complaint.updateTodoStatus(db, taskId, status);

        if (updatedTodo) {
            res.status(200).json({ message: "Todo status updated successfully", todo: updatedTodo });
        } else {
            console.error('Todo not found with ID:', taskId);
            res.status(404).json({ error: "Todo not found" });
        }
    } catch (error) {
        console.error('Error updating todo status:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});



module.exports = router;

