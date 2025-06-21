const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

router.get("/:id", teacherController.getTeacherProfile);
router.put("/:id", teacherController.updateTeacherProfile);
router.get("/:id/courses", teacherController.getTeacherCourses);

module.exports = router;
