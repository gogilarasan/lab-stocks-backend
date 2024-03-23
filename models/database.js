const dbConfig = require("./config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port, 
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

db.Lab = require("./lab")(sequelize, Sequelize); 
db.Stock = require("./stocks")(sequelize, Sequelize);
db.Staff = require("./staff")(sequelize, Sequelize);
db.Rescholar = require("./rescholar")(sequelize, Sequelize);
db.Complaint = require("./complaints")(sequelize, Sequelize);
db.Userlog = require("./userlogs")(sequelize, Sequelize);
db.Timetable = require("./timetable")(sequelize, Sequelize);
db.StockDept = require("./stockDept")(sequelize, Sequelize);


sequelize.sync({ force: false, alter: true })
  .then(() => {
    console.log("Database connected 😀 ");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;
