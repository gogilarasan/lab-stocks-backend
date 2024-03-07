
const dbConfig = require("./config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port, // Corrected the port configuration
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define your models here and export them
db.Lab = require("./lab")(sequelize, Sequelize); 
db.Stocks = require("./stocks")(sequelize, Sequelize);
db.Rescholar = require("./rescholar")(sequelize, Sequelize);
db.Staff = require("./staff")(sequelize, Sequelize);
db.Complaint = require("./complaints")(sequelize, Sequelize);
db.Userlogs = require("./userlogs")(sequelize, Sequelize);

// Sync the database
sequelize.sync({ force: false, alter: true })
  .then(() => {
    console.log("Database connected 😀 ");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;


