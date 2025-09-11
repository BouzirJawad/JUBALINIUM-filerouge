const { createProxyMiddleware } = require("http-proxy-middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const dynamicRoleMiddleware = require("../middlewares/role.middleware");

const proxyWithAuth = (path, target, useRoleMiddleware = true) => {
  const middlewares = [authMiddleware];
  if (useRoleMiddleware) middlewares.push(dynamicRoleMiddleware);

  return [
    path,
    ...middlewares,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: { ["^/"]: `${path}/` },
      onProxyReq: (proxyReq, req) => {
        if (req.user) {
          proxyReq.setHeader("x-user-id", req.user._id || req.user.userId);
          proxyReq.setHeader("x-user-role", req.user.role);
        }

        if (req.token) {
          proxyReq.setHeader("Authorization", `Bearer ${req.token}`);
        }
      },
      onError: (err, req, res) => {
        console.error("Proxy error:", err.message)
        res.status(502).json({ message: "Microservice unavailable", error: err.message });
      }
    }),
  ];
};

module.exports = (app) => {
  app.use(...proxyWithAuth("/api/auth", process.env.AUTH_SERVICE_URL));
  app.use(...proxyWithAuth("/api/users", process.env.AUTH_SERVICE_URL));
  app.use(...proxyWithAuth("/api/products", process.env.PRODUCT_SERVICE_URL));
  app.use(...proxyWithAuth("/api/fabrication", process.env.FABRICATION_SERVICE_URL));
  app.use(...proxyWithAuth("/api/fabrication-orders", process.env.FABRICATION_SERVICE_URL));
  app.use(...proxyWithAuth("/api/cart", process.env.CART_SERVICE_URL));
  app.use(...proxyWithAuth("/api/orders", process.env.ORDER_SERVICE_URL))
};
