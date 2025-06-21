const { Enrollment, Student, Course } = require("../models");

const enrollmentController = {
  getAllEnrollments: async (req, res) => {
    try {
      const enrollments = await Enrollment.findAll({
        include: ["Student", "Course"],
      });
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching enrollments", error: error.message });
    }
  },

  createEnrollment: async (req, res) => {
    try {
      const enrollmentData = req.body;
      const newEnrollment = await Enrollment.create(enrollmentData);
      res.status(201).json(newEnrollment);
    } catch (error) {
      res.status(500).json({ message: "Error creating enrollment", error: error.message });
    }
  },

  updateEnrollmentStatus: async (req, res) => {
    try {
      const enrollmentId = req.params.id;
      const { status } = req.body;

      const [updated] = await Enrollment.update(
        { status },
        {
          where: { id: enrollmentId },
        }
      );

      if (!updated) {
        return res.status(404).json({ message: "Enrollment not found" });
      }

      const updatedEnrollment = await Enrollment.findByPk(enrollmentId);
      res.json(updatedEnrollment);
    } catch (error) {
      res.status(500).json({ message: "Error updating enrollment", error: error.message });
    }
  },

  deleteEnrollment: async (req, res) => {
    try {
      const enrollmentId = req.params.id;
      const deleted = await Enrollment.destroy({
        where: { id: enrollmentId },
      });

      if (!deleted) {
        return res.status(404).json({ message: "Enrollment not found" });
      }

      res.json({ message: "Enrollment deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting enrollment", error: error.message });
    }
  },
};

module.exports = enrollmentController;
