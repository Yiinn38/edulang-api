const { Grade, Enrollment } = require("../models");

const gradeController = {
  getGradesByEnrollment: async (req, res) => {
    try {
      const enrollmentId = req.params.enrollmentId;
      const grades = await Grade.findAll({
        where: { enrollmentId },
      });
      res.json(grades);
    } catch (error) {
      res.status(500).json({ message: "Error fetching grades", error: error.message });
    }
  },

  createGrade: async (req, res) => {
    try {
      const gradeData = req.body;
      const newGrade = await Grade.create(gradeData);
      res.status(201).json(newGrade);
    } catch (error) {
      res.status(500).json({ message: "Error creating grade", error: error.message });
    }
  },

  updateGrade: async (req, res) => {
    try {
      const gradeId = req.params.id;
      const updateData = req.body;

      const [updated] = await Grade.update(updateData, {
        where: { id: gradeId },
      });

      if (!updated) {
        return res.status(404).json({ message: "Grade not found" });
      }

      const updatedGrade = await Grade.findByPk(gradeId);
      res.json(updatedGrade);
    } catch (error) {
      res.status(500).json({ message: "Error updating grade", error: error.message });
    }
  },

  deleteGrade: async (req, res) => {
    try {
      const gradeId = req.params.id;
      const deleted = await Grade.destroy({
        where: { id: gradeId },
      });

      if (!deleted) {
        return res.status(404).json({ message: "Grade not found" });
      }

      res.json({ message: "Grade deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting grade", error: error.message });
    }
  },
};

module.exports = gradeController;
