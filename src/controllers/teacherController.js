const { Teacher, Course, Enrollment } = require("../models");

const teacherController = {
  getTeacherProfile: async (req, res) => {
    try {
      const teacherId = req.params.id;
      const teacher = await Teacher.findByPk(teacherId, {
        include: [
          {
            association: "User",
            attributes: ["email", "role"],
          },
          {
            association: "Courses",
            include: ["Enrollments"],
          },
        ],
      });

      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }

      res.json(teacher);
    } catch (error) {
      res.status(500).json({ message: "Error fetching teacher profile", error: error.message });
    }
  },

  updateTeacherProfile: async (req, res) => {
    try {
      const teacherId = req.params.id;
      const updateData = req.body;

      const [updated] = await Teacher.update(updateData, {
        where: { id: teacherId },
      });

      if (!updated) {
        return res.status(404).json({ message: "Teacher not found" });
      }

      const updatedTeacher = await Teacher.findByPk(teacherId);
      res.json(updatedTeacher);
    } catch (error) {
      res.status(500).json({ message: "Error updating teacher profile", error: error.message });
    }
  },

  getTeacherCourses: async (req, res) => {
    try {
      const teacherId = req.params.id;
      const courses = await Course.findAll({
        where: { teacherId },
        include: ["Enrollments"],
      });

      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching teacher courses", error: error.message });
    }
  },
};

module.exports = teacherController;
