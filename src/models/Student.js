const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    enrollmentNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    address: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.STRING(20),
    },
  },
  {
    tableName: "Students",
    timestamps: true,
  }
);

Student.belongsTo(User, { foreignKey: "userId" });
User.hasOne(Student, { foreignKey: "userId" });

module.exports = Student;
