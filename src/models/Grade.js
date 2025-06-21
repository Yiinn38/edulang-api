const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Enrollment = require("./Enrollment");

const Grade = sequelize.define(
  "Grade",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    enrollmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Enrollment,
        key: "id",
      },
    },
    evaluationType: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    score: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    evaluationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "Grades",
    timestamps: true,
  }
);

Grade.belongsTo(Enrollment, { foreignKey: "enrollmentId" });
Enrollment.hasMany(Grade, { foreignKey: "enrollmentId" });

module.exports = Grade;
