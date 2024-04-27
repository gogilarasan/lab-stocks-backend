const express = require("express");
const db = require('../models/database');
const obj = require("../controllers/obj");

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const shortid = require('shortid');

const router = express.Router();

router.use(express.json());

router.post('/create_lab', async (req, res) => {
    try {
        const result = await obj.lab.createLab(db, req.body);
        if (result) {
            res.status(200).json({ "message": "Lab created successfully" });
        } else {
            res.status(500).json({ "error": "Failed to create lab" });
        }
    } catch (error) {
        console.error('Error creating lab:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/create_stock', async (req, res) => {
    try {
        const result = await obj.stock.createStock(db, req.body);
        if (result) {
            res.status(200).json({ "message": "Stock created successfully" });
        } else {
            res.status(500).json({ "error": "Failed to create stock" });
        }
    } catch (error) {
        console.error('Error creating stock:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_stock_dept', async (req, res) => {
    try {
        const result = await obj.stockdept.createStockDept(req.body);
        res.status(200).json({ "message": "Stock department created successfully", "data": result });
    } catch (error) {
        console.error('Error creating stock department:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/bulk-import', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const filePath = req.file.path;
        let records = [];

        if (req.file.mimetype === 'application/json') {
            records = JSON.parse(fs.readFileSync(filePath));
        } else if (req.file.mimetype === 'text/csv') {
            records = await obj.stockdept.parseCSV(filePath);
        } else if (req.file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            records = await obj.stockdept.parseExcel(filePath);
        } else {
            return res.status(400).json({ message: 'Unsupported file type' });
        }

        // Generate unique ID for each record
        records.forEach((stockDeptData) => {
            const s_id = shortid.generate();
            stockDeptData.stockd_id = s_id;
        });

        await db.StockDept.bulkCreate(records);
        res.status(200).json({ message: 'Bulk import successful' });
    } catch (error) {
        console.error('Error bulk importing stock departments:', error);
        res.status(500).json({ message: 'Failed to import stock departments' });
    }
});


router.post('/bulk-import-deptsystem', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { lab_id } = req.body; 

        const filePath = req.file.path;
        let records = [];

        if (req.file.mimetype === 'application/json') {
            console.log('JSON data:', fs.readFileSync(filePath, 'utf-8'));
            records = JSON.parse(fs.readFileSync(filePath));
        } else if (req.file.mimetype === 'text/csv') {
            records = await obj.stock.parseCSV(filePath);
        } else if (req.file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            records = await obj.stock.parseExcel(filePath);
        } else {
            return res.status(400).json({ message: 'Unsupported file type' });
        }

        // Generate random stock_id using shortid and append lab_id
        records = records.map(record => ({
            ...record,
            stock_id: shortid.generate(),
            lab_id: lab_id
        }));

        await db.Stock.bulkCreate(records);
        res.status(200).json({ message: 'Bulk import successful' });
    } catch (error) {
        console.error('Error bulk importing department stocks:', error);
        res.status(500).json({ message: 'Failed to import department stocks' });
    }
});


router.post('/create_staff', async (req, res) => {
    try {
        const result = await obj.staff.createStaff(db, req.body);
        res.status(200).json({ "message": "Staff created successfully", "data": result });
    } catch (error) {
        console.error('Error creating staff:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_timetable', async (req, res) => {
    try {
        const result = await obj.timetable.createTimetable(db, req.body);
        res.status(200).json({ "message": "Timetable created successfully", "data": result });
    } catch (error) {
        console.error('Error creating timetable:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_research_scholar', async (req, res) => {
    try {

        const result = await obj.rs.createResearchScholar(db, req.body);
        res.status(200).json({ "message": "Research scholar created successfully", "data": result });
    } catch (error) {
        console.error('Error creating research scholar:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_user_log', async (req, res) => {
    try {

        const result = await obj.Userlog.createUserLog(db, req.body);
        res.status(200).json({ "message": "User log created successfully", "data": result });
    } catch (error) {
        console.error('Error Entry of USer:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_user_log1', async (req, res) => {
    try {
        const userInput = {
            labid: req.body.lab_id,
            sysseat: req.body.seat_no,
            username: req.body.name,
            rollno: req.body.rollno,
            entry_time: req.body.entry_time,
            date: req.body.date
        };
        const userLog = await obj.Userlog.createUserLog1(db, userInput);
        res.status(200).json({ message: "User log created successfully", data: userLog });
    } catch (error) {
        console.error('Error creating user log:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Define the getDayOfWeek function
function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

// Define the route handler
router.post('/create_user_log_timetable', async (req, res) => {
    try {
        const { labid, date, entry_time } = req.body;

        const dayOfWeek = getDayOfWeek(date);

        const timetables = await db.Timetable.findAll({
            where: {
                lab_id: labid,
                day: dayOfWeek,
            }
        });

        if (!timetables || timetables.length === 0) {
            throw new Error('Timetable not found for the desired day');
        }

        // Find the timetable slot that matches the entry time
        const matchingSlot = timetables.find(slot => {
            const [startTimeStr, endTimeStr] = slot.timings.split('-');
            const startTime = new Date(`${date} ${startTimeStr}`);
            const endTime = new Date(`${date} ${endTimeStr}`);
            const entryTime = new Date(`${date} ${entry_time}`);
            return entryTime >= startTime && entryTime <= endTime;
        });

        if (!matchingSlot) {
            throw new Error('Timetable slot not found for the entry time');
        }

        const { timetable_id } = matchingSlot;

        // Create user log entry with the retrieved timetable ID
        const userLogData = {
            ...req.body,
            timetable_id: timetable_id,
        };

        const result = await obj.Userlog.createUserLog(db, userLogData);
        res.status(200).json({ "message": "User log created successfully", "data": result });
    } catch (error) {
        console.error('Error creating user log:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_todo', async (req, res) => {
    try {
        const result = await obj.complaint.createTodo(db, req.body);
        res.status(200).json({ "message": "Todo created successfully", "data": result });
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_login', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUsername = await db.Login.findOne({ where: { username } });
        if (existingUsername) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const existingEmail = await db.Login.findOne({ where: { email } });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const result = await obj.login.createLogin(db, { username, email, password });
        res.status(201).json({ message: 'Account created successfully', user: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
