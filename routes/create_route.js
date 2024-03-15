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
        const result = await StockDeptController.createStockDept(req.body);
        res.status(200).json({ "message": "Stock department created successfully", "data": result });
    } catch (error) {
        console.error('Error creating stock department:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});



module.exports = router;
