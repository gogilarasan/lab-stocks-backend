const { Op } = require('sequelize');
const db = require("../models/database");
const id = require("shortid");
const XLSX = require('xlsx');


class StockController {
    static async createStock(db, stockData) {
        try {
            const s_id = id.generate();

            stockData.stock_id = s_id;
            const stock = await db.Stock.create(stockData);
            return stock;
        } catch (error) {
            console.error('Error creating stock:', error);
            throw error;
        }
    }

    static async getStockById(db, stockId) {
        try {
            const stock = await db.Stock.findByPk(stockId);
            return stock;
        } catch (error) {
            console.error('Error getting stock by ID:', error);
            throw error;
        }
    }

    static async getStockByLabId(db, LabId) {
        try {
            const stock = await db.Stock.findAll({ where: { lab_id: LabId } });
            return stock;
        } catch (error) {
            console.error('Error getting stock by ID:', error);
            throw error;
        }
    }

    static async getAllStocks(db) {
        try {
            const stocks = await db.Stock.findAll();
            return stocks;
        } catch (error) {
            console.error('Error getting all stocks:', error);
            throw error;
        }
    }

    static async updateStock(db, stockId, stockData) {
        try {
            const stock = await db.Stock.findByPk(stockId);
            if (stock) {
                await stock.update(stockData);
                return true;
            } else {
                console.error('Stock not found with ID:', stockId);
                return false;
            }
        } catch (error) {
            console.error('Error updating stock:', error);
            throw error;
        }
    }

    static async deleteStock(db, stockId) {
        try {
            // Delete the stock with the given stock_id
            const deletedRows = await db.Stock.destroy({ where: { stock_id: stockId } });

            // Check if any rows were affected (i.e., if the stock was found and deleted)
            if (deletedRows > 0) {
                return true; // Stock deleted successfully
            } else {
                console.error('Stock not found with ID:', stockId);
                return false; // Stock not found
            }
        } catch (error) {
            console.error('Error deleting stock: because staff is using this dist printed stock', error);
            throw error;
        }
    }


    static async deleteStockByDistId(db, distId) {
        try {
            // Find the stock with the given dist_id
            const stock = await db.Stock.findOne({ where: { dist_id: distId } });

            // If stock is not found, return false
            if (!stock) {
                console.error('Stock not found with dist_id:', distId);
                return false;
            }

            // If stock is found, delete it
            await stock.destroy();
            return true;
        } catch (error) {
            console.error('Error deleting stock:', error);
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

module.exports = StockController;
