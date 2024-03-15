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
        const deletedDept = await StockDeptController.deleteStockDept(deptId);
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


module.exports = router;
