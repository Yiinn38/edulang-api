const { Course, Enrollment, Teacher } = require("../models");

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.findAll({
        include: ["Teacher", "Enrollments"],
      });
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching courses", error: error.message });
    }
  },

  getCourseById: async (req, res) => {
    try {
      const courseId = req.params.id;
      const course = await Course.findByPk(courseId, {
        include: ["Teacher", "Enrollments"],
      });

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Error fetching course", error: error.message });
    }
  },

  createCourse: async (req, res) => {
    try {
      const courseData = req.body;
      const newCourse = await Course.create(courseData);
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(500).json({ message: "Error creating course", error: error.message });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const courseId = req.params.id;
      const updateData = req.body;

      const [updated] = await Course.update(updateData, {
        where: { id: courseId },
      });

      if (!updated) {
        return res.status(404).json({ message: "Course not found" });
      }

      const updatedCourse = await Course.findByPk(courseId);
      res.json(updatedCourse);
    } catch (error) {
      res.status(500).json({ message: "Error updating course", error: error.message });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const courseId = req.params.id;
      const deleted = await Course.destroy({
        where: { id: courseId },
      });

      if (!deleted) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.json({ message: "Course deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting course", error: error.message });
    }
  },
};

module.exports = courseController;
