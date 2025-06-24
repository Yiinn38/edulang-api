const { User, Student, Teacher, Course, Enrollment, Grade, Payment } = require("../models");

const adminController = {
  // CRUD para estudiantes
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.findAll();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: "Error fetching students", error: error.message });
    }
  },

  createStudent: async (req, res) => {
    try {
      const { user, student } = req.body;

      const newUser = await User.create({
        email: user.email,
        password: user.password,
        role: "student",
      });

      const newStudent = await Student.create({
        userId: newUser.id,
        ...student,
      });

      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).json({ message: "Error creating student", error: error.message });
    }
  },

  // CRUD para docentes
  getAllTeachers: async (req, res) => {
    try {
      const teachers = await Teacher.findAll();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching teachers", error: error.message });
    }
  },

  createTeacher: async (req, res) => {
    try {
      const { user, teacher } = req.body;

      const newUser = await User.create({
        email: user.email,
        password: user.password,
        role: "teacher",
      });

      const newTeacher = await Teacher.create({
        userId: newUser.id,
        ...teacher,
      });

      res.status(201).json(newTeacher);
    } catch (error) {
      res.status(500).json({ message: "Error creating teacher", error: error.message });
    }
  },

  // CRUD para cursos
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.findAll();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching courses", error: error.message });
    }
  },

  // CRUD para matrículas
  getAllEnrollments: async (req, res) => {
    try {
      const enrollments = await Enrollment.findAll();
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching enrollments", error: error.message });
    }
  },

  // CRUD para calificaciones
  getAllGrades: async (req, res) => {
    try {
      const grades = await Grade.findAll();
      res.json(grades);
    } catch (error) {
      res.status(500).json({ message: "Error fetching grades", error: error.message });
    }
  },

  // CRUD para pagos
  getAllPayments: async (req, res) => {
    try {
      const payments = await Payment.findAll();
      res.json(payments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching payments", error: error.message });
    }
  },
};

module.exports = adminController;
