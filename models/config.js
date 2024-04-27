module.exports = {
  HOST: "localhost",
  USER: "nishanth",
  PASSWORD: "1234",
  DB: "stocks-ist",
  PORT: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000, 
    idle: 10000, 
  },
};
