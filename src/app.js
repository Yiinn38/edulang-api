const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const gradeRoutes = require("./routes/gradeRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const { User } = require("./models");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/grades", gradeRoutes);
app.use("/api/payments", paymentRoutes);

// Sincronización de la base de datos y creación de admin inicial
const initDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // Cambiar a true solo para desarrollo (borra todas las tablas)

    // Crear admin inicial si no existe
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    const adminExists = await User.findOne({ where: { email: adminEmail } });
    if (!adminExists) {
      await User.create({
        email: adminEmail,
        password: adminPassword,
        role: "admin",
      });
      console.log("Admin user created successfully");
    }
  } catch (error) {
    console.error("Database initialization error:", error);
  }
};

initDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
