const express = require("express");
const app = express();
const port = 5000;

// Import Sequelize models
const db = require("./models/database");

// Synchronize models with the database
db.sequelize.sync()
  .then(() => {
    console.log("Models synchronized with the database");
  })
  .catch(err => {
    console.error("Error synchronizing models:", err);
  });

// Set up middleware if needed
// Example middleware usage: app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
});
