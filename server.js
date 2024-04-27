const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const path = require("path")
const createAdminRoutes = require("./routes/create_route");
const updateAdminRoutes = require("./routes/update_route");
const deleteAdminRoutes = require("./routes/delete_route");
const viewAdminRoutes   = require("./routes/view_route");
app.use(cors()); 
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
app.get("/logme",(req,res) => {
  res.sendFile(path.join(__dirname,"LabRecord.html"))
})
app.use("/admin", createAdminRoutes);
app.use("/admin", updateAdminRoutes);
app.use("/admin", deleteAdminRoutes);
app.use("/admin", viewAdminRoutes);