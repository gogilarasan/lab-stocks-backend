const express = require("express");
const db = require('../models/database');
const obj = require("../controllers/obj");

const router = express.Router();

router.use(express.json());

router.post('/get_all_labs', async (req, res) => {
    try {
        const labs = await obj.lab.getAllLabs(db);
        res.status(200).json(labs);
    } catch (error) {
        console.error('Error getting all labs:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_lab_by_id', async (req, res) => {
    const labId = req.body.labId;
    try {
        const lab = await obj.lab.getLabById(db, labId);
        if (lab) {
            res.status(200).json(lab);
        } else {
            res.status(404).json({ "error": "Lab not found" });
        }
    } catch (error) {
        console.error('Error getting lab by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_all_stocks', async (req, res) => {
    try {
        const stocks = await obj.stock.getAllStocks(db);
        res.status(200).json(stocks);
    } catch (error) {
        console.error('Error getting all stocks:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_stock_by_id', async (req, res) => {
    const stockId = req.body.stock_id;
    try {
        const stock = await obj.stock.getStockById(db, stockId);
        if (stock) {
            res.status(200).json(stock);
        } else {
            res.status(404).json({ "error": "Stock not found" });
        }
    } catch (error) {
        console.error('Error getting stock by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/get_stock_by_Labid', async (req, res) => {
    const LabId = req.body.lab_id;
    try {
        const stock = await obj.stock.getStockByLabId(db, LabId);
        if (stock) {
            res.status(200).json(stock);
        } else {
            res.status(404).json({ "error": "Stock not found" });
        }
    } catch (error) {
        console.error('Error getting stock by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_stock_dept_by_id', async (req, res) => {
    const deptId = req.body.deptId;
    try {
        const dept = await obj.stockdept.getStockDeptById(deptId);
        if (dept) {
            res.status(200).json(dept);
        } else {
            res.status(404).json({ "error": "Stock department not found" });
        }
    } catch (error) {
        console.error('Error getting stock department by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_all_stock_depts', async (req, res) => {
    try {
        const stocks = await obj.stockdept.getAllStockDepts();
        res.status(200).json(stocks);
    } catch (error) {
        console.error('Error getting all stocks:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/get_staff_by_id', async (req, res) => {
    const staffId = req.body.staffId;
    try {
        const staff = await obj.staff.getStaffById(db, staffId);
        if (staff) {
            res.status(200).json(staff);
        } else {
            res.status(404).json({ "error": "Staff not found" });
        }
    } catch (error) {
        console.error('Error getting staff by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_all_staffs', async (req, res) => {
    try {
        const staffs = await obj.staff.getAllStaffs(db);
        res.status(200).json(staffs);
    } catch (error) {
        console.error('Error getting all staffs:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_timetable_by_id', async (req, res) => {
    const timetableId = req.body.timetableId;
    try {
        const timetable = await obj.timetable.getTimetableById(db, timetableId);
        if (timetable) {
            res.status(200).json(timetable);
        } else {
            res.status(404).json({ "error": "Timetable not found" });
        }
    } catch (error) {
        console.error('Error getting timetable by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_timetable_by_Lab_id', async (req, res) => {
    const lab_id = req.body.lab_id;
    try {
        const timetable = await obj.timetable.getTimetableByLabId(db, lab_id);
        if (timetable) {
            res.status(200).json(timetable);
        } else {
            res.status(404).json({ "error": "Timetable not found" });
        }
    } catch (error) {
        console.error('Error getting timetable by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_all_timetables', async (req, res) => {
    try {
        const timetables = await obj.timetable.getAllTimetables(db);
        res.status(200).json(timetables);
    } catch (error) {
        console.error('Error getting all timetables:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_research_scholar_by_id', async (req, res) => {
    const scholarId = req.body.rs_id;
    try {
        const scholar = await obj.rs.getResearchScholarById(db, scholarId);
        if (scholar) {
            res.status(200).json(scholar);
        } else {
            res.status(404).json({ "error": "Research scholar not found" });
        }
    } catch (error) {
        console.error('Error getting research scholar by ID:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_all_research_scholars', async (req, res) => {
    try {
        const scholars = await obj.rs.getAllResearchScholars(db);
        res.status(200).json(scholars);
    } catch (error) {
        console.error('Error getting all research scholars:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/get_userlog_by_id', async (req, res) => {
    const userLogId = req.body.userLogId;
    try {
        const userLog = await obj.Userlog.getUserLogById(db, userLogId);
        res.status(200).json(userLog);
    } catch (error) {
        console.error('Error getting user log by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/get_userlog_by_seatno', async (req, res) => {
    const seatNo = req.body.sysseat;
    try {
        const userLogs = await obj.Userlog.getUserLogBySeatNo(db, seatNo);
        res.status(200).json(userLogs);
    } catch (error) {
        console.error('Error getting user logs by seat number:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



router.post('/get_user_logs_by_lab_id', async (req, res) => {
    const labId = req.body.labid;
    try {
        const userLogs = await obj.Userlog.getUserLogsByLabId(db, labId);
        res.status(200).json(userLogs);
    } catch (error) {
        console.error('Error getting user logs by lab ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/get_todo_by_id', async (req, res) => {
    try {
        const taskId = req.body.task_id;
        const todo = await obj.complaint.getTodoById(db, taskId);
        res.status(200).json({ message: "Todo retrieved successfully", data: todo });
    } catch (error) {
        console.error('Error getting todo by ID:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/get_all_todos', async (req, res) => {
    try {
        const todos = await obj.complaint.getAllTodos(db);
        res.status(200).json({ message: "All todos retrieved successfully", data: todos });
    } catch (error) {
        console.error('Error getting all todos:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await obj.login.signin(db, username, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

router.post('/userDetails', async (req, res) => {
    try {
        const { username } = req.body;
        const user = await obj.login.userView(db, username);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error in /userDetails endpoint:', error); // Log the error
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;