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
        const updatedDept = await StockDeptController.updateStockDept(deptId, deptData);
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


module.exports = router;

