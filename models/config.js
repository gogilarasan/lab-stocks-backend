module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "root",
  DB: "stocks-ist",
  PORT: 5432, // Specify the port of your PostgreSQL database
  dialect: "postgresql",
  //dialectOptions: {ssl:true},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000, // Adjusted acquire time (in milliseconds)
    idle: 10000, // Adjusted idle time (in milliseconds)
  },
};
