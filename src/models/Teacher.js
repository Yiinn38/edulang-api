const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Teacher = sequelize.define(
  "Teacher",
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
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING(255),
    },
    availability: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.STRING(20),
    },
  },
  {
    tableName: "Teachers",
    timestamps: true,
  }
);

Teacher.belongsTo(User, { foreignKey: "userId" });
User.hasOne(Teacher, { foreignKey: "userId" });

module.exports = Teacher;
