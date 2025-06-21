const { Payment, Student } = require("../models");

const paymentController = {
  getPaymentsByStudent: async (req, res) => {
    try {
      const studentId = req.params.studentId;
      const payments = await Payment.findAll({
        where: { studentId },
      });
      res.json(payments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching payments", error: error.message });
    }
  },

  createPayment: async (req, res) => {
    try {
      const paymentData = req.body;
      const newPayment = await Payment.create(paymentData);
      res.status(201).json(newPayment);
    } catch (error) {
      res.status(500).json({ message: "Error creating payment", error: error.message });
    }
  },

  updatePaymentStatus: async (req, res) => {
    try {
      const paymentId = req.params.id;
      const { status } = req.body;

      const [updated] = await Payment.update(
        { status },
        {
          where: { id: paymentId },
        }
      );

      if (!updated) {
        return res.status(404).json({ message: "Payment not found" });
      }

      const updatedPayment = await Payment.findByPk(paymentId);
      res.json(updatedPayment);
    } catch (error) {
      res.status(500).json({ message: "Error updating payment", error: error.message });
    }
  },

  deletePayment: async (req, res) => {
    try {
      const paymentId = req.params.id;
      const deleted = await Payment.destroy({
        where: { id: paymentId },
      });

      if (!deleted) {
        return res.status(404).json({ message: "Payment not found" });
      }

      res.json({ message: "Payment deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting payment", error: error.message });
    }
  },
};

module.exports = paymentController;
