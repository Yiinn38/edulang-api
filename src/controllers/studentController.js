const { Student, Enrollment, Grade, Payment } = require("../models");

const studentController = {
  getStudentProfile: async (req, res) => {
    try {
      const studentId = req.params.id;
      const student = await Student.findByPk(studentId, {
        include: [
          {
            association: "User",
            attributes: ["email", "role"],
          },
          {
            association: "Enrollments",
            include: ["Course", "Grades"],
          },
          "Payments",
        ],
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.json(student);
    } catch (error) {
      res.status(500).json({ message: "Error fetching student profile", error: error.message });
    }
  },

  updateStudentProfile: async (req, res) => {
    try {
      const studentId = req.params.id;
      const updateData = req.body;

      const [updated] = await Student.update(updateData, {
        where: { id: studentId },
      });

      if (!updated) {
        return res.status(404).json({ message: "Student not found" });
      }

      const updatedStudent = await Student.findByPk(studentId);
      res.json(updatedStudent);
    } catch (error) {
      res.status(500).json({ message: "Error updating student profile", error: error.message });
    }
  },
};

module.exports = studentController;
