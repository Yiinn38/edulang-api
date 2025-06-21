const { User } = require("../models");

const authMiddleware = {
  checkRole: (roles) => {
    return async (req, res, next) => {
      try {
        if (!req.user) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const user = await User.findByPk(req.user.id);
        if (!user || !roles.includes(user.role)) {
          return res.status(403).json({ message: "Forbidden" });
        }

        next();
      } catch (error) {
        res.status(500).json({ message: "Authentication error", error: error.message });
      }
    };
  },
};

module.exports = authMiddleware;
