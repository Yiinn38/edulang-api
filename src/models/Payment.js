const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./Student");

const Payment = sequelize.define(
  "Payment",
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
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentType: {
      type: DataTypes.ENUM("registration", "monthly"),
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM("pending", "paid", "cancelled"),
      defaultValue: "pending",
    },
  },
  {
    tableName: "Payments",
    timestamps: true,
  }
);

Payment.belongsTo(Student, { foreignKey: "studentId" });
Student.hasMany(Payment, { foreignKey: "studentId" });

module.exports = Payment;
