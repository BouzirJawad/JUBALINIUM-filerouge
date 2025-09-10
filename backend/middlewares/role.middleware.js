const roleAccessMap = require("../config/roleAccess.config");
const { match } = require("path-to-regexp");

const dynamicRoleMiddleware = (req, res, next) => {
  const currentMethod = req.method.toUpperCase();
  const userRole = req.user?.role;
  const currentPath = req.baseUrl + req.path;

  let allowRoles = null;

  if (!userRole) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  for (const route of roleAccessMap) {

    if (route.method !== currentMethod) continue;

    const matcher = match(route.path , { decode: decodeURIComponent });
    const matched = matcher(currentPath);

    if (matched) {
      allowRoles = route.roles;
      break;
    }
  }

  if (!allowRoles) {
    return res
      .status(403)
      .json({ message: "Access denied - No rule for this route" });
  }

  if (!allowRoles.includes(userRole)) {
    return res.status(403).json({ message: "Access denied" });
  }

  next();
};

module.exports = dynamicRoleMiddleware;
