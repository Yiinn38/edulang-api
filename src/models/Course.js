const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Teacher = require("./Teacher");

const Course = sequelize.define(
  "Course",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    level: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    schedule: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.INTEGER,
      references: {
        model: Teacher,
        key: "id",
      },
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "Courses",
    timestamps: true,
  }
);

Course.belongsTo(Teacher, { foreignKey: "teacherId" });
Teacher.hasMany(Course, { foreignKey: "teacherId" });

module.exports = Course;
