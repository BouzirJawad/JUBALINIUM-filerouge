const { verifyToken } = require("../config/jwt");
const axios = require("axios");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      req.user = { role: "guest" };
      return next();
    }

    const token = authHeader?.replace("Bearer ", "");
    const decoded = verifyToken(token);
    if (!decoded?.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    try {
      const userRes = await axios.get(
        `${process.env.AUTH_SERVICE_URL}/api/users/${decoded.userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = userRes.data;
      if (!user) {
        return res
          .status(401)
          .json({ message: "User not found! Token invalid" });
      }

      req.user = decoded;
      req.token = token;
      return next();
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return res
          .status(err.status)
          .json({ message: "User not found! Token invalid" });
      }
      if (err.response && err.response?.data.message) {
        return res
          .status(err.status)
          .json({ message: err.response?.data.message });
      }
      return res.status(503).json({ message: "Auth service unavailable" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
