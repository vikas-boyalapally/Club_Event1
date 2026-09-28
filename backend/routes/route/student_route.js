let express = require("express");

let router = express.Router();

let student = require("../model/student");

router.post("/register", async (req, res) => {

    try {

        let data = req.body;

        let newStudent = new student(data);

        await newStudent.save();

        console.log("student registered");

        res.status(201).json({
            message: "Student registered successfully",
            student: newStudent
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Student registration failed",
            error: err.message
        });

    }

});

router.post("/login", (req, res) => {

    console.log("student login");

});

router.put("/updateprofile", (req, res) => {

    console.log("student profileUpdated");

});

router.get("/searchevent", (req, res) => {

    console.log("student searched for event");

});

router.post("/applyingevent", (req, res) => {

    console.log("student applied for event");

});

router.post("/applyingOD", (req, res) => {

    console.log("student applied for OD");

});

router.get("/ODstatus", (req, res) => {

    console.log("student viewed OD status");

});

router.post("/report", (req, res) => {

    console.log("student reported successfully");

});

module.exports = router;