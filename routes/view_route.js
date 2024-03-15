const express = require("express");
const db = require('../models/database');
const obj = require("../controllers/obj");

const router = express.Router();

router.use(express.json());

router.post('/get_all_labs', async (req, res) => {
    try {
        const labs = await obj.lab.getAllLabs(db);
        res.status(200).json(labs);
    } catch (error) {
        console.error('Error getting all labs:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_lab_by_id', async (req, res) => {
    const labId = req.body.labId;
    try {
        const lab = await obj.lab.getLabById(db, labId);
        if (lab) {
            res.status(200).json(lab);
        } else {
            res.status(404).json({ "error": "Lab not found" });
        }
    } catch (error) {
        console.error('Error getting lab by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_all_stocks', async (req, res) => {
    try {
        const stocks = await obj.stock.getAllStocks(db);
        res.status(200).json(stocks);
    } catch (error) {
        console.error('Error getting all stocks:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_stock_by_id', async (req, res) => {
    const stockId = req.body.stock_id;
    try {
        const stock = await obj.stock.getStockById(db, stockId);
        if (stock) {
            res.status(200).json(stock);
        } else {
            res.status(404).json({ "error": "Stock not found" });
        }
    } catch (error) {
        console.error('Error getting stock by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_stock_dept_by_id', async (req, res) => {
    const deptId = req.body.deptId;
    try {
        const dept = await StockDeptController.getStockDeptById(deptId);
        if (dept) {
            res.status(200).json(dept);
        } else {
            res.status(404).json({ "error": "Stock department not found" });
        }
    } catch (error) {
        console.error('Error getting stock department by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_all_stocks', async (req, res) => {
    try {
        const stocks = await StockDeptController.getAllStockDepts();
        res.status(200).json(stocks);
    } catch (error) {
        console.error('Error getting all stocks:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});



module.exports = router;