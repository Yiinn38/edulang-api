const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Students
router.get("/students", adminController.getAllStudents);
router.post("/students", adminController.createStudent);

// Teachers
router.get("/teachers", adminController.getAllTeachers);

// Courses
router.get("/courses", adminController.getAllCourses);

// Enrollments
router.get("/enrollments", adminController.getAllEnrollments);

// Grades
router.get("/grades", adminController.getAllGrades);

// Payments
router.get("/payments", adminController.getAllPayments);

module.exports = router;
