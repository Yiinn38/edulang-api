const express = require("express");
const router = express.Router();
const gradeController = require("../controllers/gradeController");

router.get("/enrollment/:enrollmentId", gradeController.getGradesByEnrollment);
router.post("/", gradeController.createGrade);
router.put("/:id", gradeController.updateGrade);
router.delete("/:id", gradeController.deleteGrade);

module.exports = router;
