const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./Student");
const Course = require("./Course");

const Enrollment = sequelize.define(
  "Enrollment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Student,
        key: "id",
      },
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: "id",
      },
    },
    enrollmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "completed", "cancelled"),
      defaultValue: "active",
    },
  },
  {
    tableName: "Enrollments",
    timestamps: true,
  }
);

Enrollment.belongsTo(Student, { foreignKey: "studentId" });
Student.hasMany(Enrollment, { foreignKey: "studentId" });

Enrollment.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Enrollment, { foreignKey: "courseId" });

module.exports = Enrollment;
