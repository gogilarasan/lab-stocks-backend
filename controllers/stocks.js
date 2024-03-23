const { Op } = require('sequelize');
const db = require("../models/database");
const id = require("shortid");

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
            const stock = await db.Stock.findByPk(stockId);
            if (stock) {
                await stock.destroy();
                return true;
            } else {
                console.error('Stock not found with ID:', stockId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting stock:', error);
            throw error;
        }
    }
}

module.exports = StockController;
