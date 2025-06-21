const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/:id", studentController.getStudentProfile);
router.put("/:id", studentController.updateStudentProfile);

module.exports = router;
