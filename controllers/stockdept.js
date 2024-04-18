const db = require('../models/database');
const XLSX = require('xlsx');

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

    static async parseCSV(filePath) {
        return new Promise((resolve, reject) => {
            const records = [];
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (row) => {
                    records.push(row);
                })
                .on('end', () => {
                    resolve(records);
                })
                .on('error', (error) => {
                    reject(error);
                });
        });
    }

    static async parseExcel(filePath) {
        return new Promise((resolve, reject) => {
            const records = [];
            const workbook = XLSX.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            data.forEach((row) => {
                const record = {};
                for (let i = 0; i < row.length; i++) {
                    record[`col${i + 1}`] = row[i];
                }
                records.push(record);
            });
            resolve(records);
        });
    }
}

module.exports = StockDeptController;
