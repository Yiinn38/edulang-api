const { User } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const isValidPassword = await user.validPassword(password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const userData = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      res.json({ message: "Login successful", user: userData });
    } catch (error) {
      res.status(500).json({ message: "Error during login", error: error.message });
    }
  },
};

module.exports = authController;
