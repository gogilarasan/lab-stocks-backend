const db = require('../models/database');

class StockDeptController {
    static async createStockDept(stockDeptData) {
        try {
            const stockDept = await db.StockDept.create(stockDeptData);
            return stockDept;
        } catch (error) {
            console.error('Error creating stock department:', error);
            throw error;
        }
    }

    static async createStockDeptArr(stockDeptDataArray) {
        try {
            const createdStocks = await Promise.all(stockDeptDataArray.map(async (stockDeptData) => {
                const stockDept = await db.StockDept.create(stockDeptData);
                return stockDept;
            }));
            return createdStocks;
        } catch (error) {
            console.error('Error creating stock departments:', error);
            throw error;
        }
    }
    
    

    static async getStockDeptById(stockDeptId) {
        try {
            const stockDept = await db.StockDept.findByPk(stockDeptId);
            return stockDept;
        } catch (error) {
            console.error('Error getting stock department by ID:', error);
            throw error;
        }
    }

    static async getAllStockDepts() {
        try {
            const stockDepts = await db.StockDept.findAll();
            return stockDepts;
        } catch (error) {
            console.error('Error getting all stock departments:', error);
            throw error;
        }
    }

    static async updateStockDept(stockDeptId, stockDeptData) {
        try {
            await db.StockDept.update(stockDeptData, {
                where: { id: stockDeptId }
            });
            const updatedStockDept = await db.StockDept.findByPk(stockDeptId);
            return updatedStockDept;
        } catch (error) {
            console.error('Error updating stock department:', error);
            throw error;
        }
    }

    static async deleteStockDept(stockDeptId) {
        try {
            const stockDept = await db.StockDept.findByPk(stockDeptId);
            if (stockDept) {
                await stockDept.destroy();
                return true;
            } else {
                console.error('Stock department not found with ID:', stockDeptId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting stock department:', error);
            throw error;
        }
    }
}

module.exports = StockDeptController;
