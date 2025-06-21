const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/student/:studentId", paymentController.getPaymentsByStudent);
router.post("/", paymentController.createPayment);
router.put("/:id/status", paymentController.updatePaymentStatus);
router.delete("/:id", paymentController.deletePayment);

module.exports = router;
