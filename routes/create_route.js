const express = require("express");
const db = require('../models/database');
const obj = require("../controllers/obj");

const router = express.Router();

router.use(express.json());

router.post('/create_lab', async (req, res) => {
    try {
        const result = await obj.lab.createLab(db, req.body);
        if (result) {
            res.status(200).json({ "message": "Lab created successfully" });
        } else {
            res.status(500).json({ "error": "Failed to create lab" });
        }
    } catch (error) {
        console.error('Error creating lab:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/create_stock', async (req, res) => {
    try {
        const result = await obj.stock.createStock(db, req.body);
        if (result) {
            res.status(200).json({ "message": "Stock created successfully" });
        } else {
            res.status(500).json({ "error": "Failed to create stock" });
        }
    } catch (error) {
        console.error('Error creating stock:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_stock_dept', async (req, res) => {
    try {
        const result = await obj.stockdept.createStockDept(req.body);
        res.status(200).json({ "message": "Stock department created successfully", "data": result });
    } catch (error) {
        console.error('Error creating stock department:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_stock_dept_arr', async (req, res) => {
    try {
        const stockDeptDataArray = req.body.stockDeptDataArray; // Expecting an array of stock data
        const result = await obj.stockdept.createStockDeptArr(stockDeptDataArray);
        res.status(200).json({ "message": "Stock departments created successfully", "data": result });
    } catch (error) {
        console.error('Error creating stock departments:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/create_staff', async (req, res) => {
    try {
        const result = await obj.staff.createStaff(db ,req.body);
        res.status(200).json({ "message": "Staff created successfully", "data": result });
    } catch (error) {
        console.error('Error creating staff:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_timetable', async (req, res) => {
    try {
        const result = await obj.timetable.createTimetable(db, req.body);
        res.status(200).json({ "message": "Timetable created successfully", "data": result });
    } catch (error) {
        console.error('Error creating timetable:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_research_scholar', async (req, res) => {
    try {
        
        const result = await obj.rs.createResearchScholar(db,req.body);
        res.status(200).json({ "message": "Research scholar created successfully", "data": result });
    } catch (error) {
        console.error('Error creating research scholar:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_user_log', async (req, res) => {
    try {
        
        const result = await obj.Userlog.createUserLog(db,req.body);
        res.status(200).json({ "message": "User log created successfully", "data": result });
    } catch (error) {
        console.error('Error Entry of USer:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_user_log1', async (req, res) => {
    try {
        const userInput = {
            labid: req.body.lab_id,
            sysseat: req.body.seat_no,
            username: req.body.name,
            rollno: req.body.rollno,
            entry_time: req.body.entry_time,
            date: req.body.date
        };
        const userLog = await obj.Userlog.createUserLog1(db, userInput);
        res.status(200).json({ message: "User log created successfully", data: userLog });
    } catch (error) {
        console.error('Error creating user log:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.post('/create_complaint', async (req, res) => {
    try {
        
        const result = await obj.complaint.createComplaint(db,req.body);
        res.status(200).json({ "message": "Complaint created successfully", "data": result });
    } catch (error) {
        console.error('Error Entry of Complaint:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});





module.exports = router;
