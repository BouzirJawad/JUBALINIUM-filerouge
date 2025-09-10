module.exports = [
  // AUTH MICRO
  { method: "POST", path: "/api/auth/login", roles: ["guest", "client", "worker", "seller", "admin"] },
  { method: "POST", path: "/api/auth/register", roles: ["guest"] },

  // USERS MICRO
  { method: "GET", path: "/api/users", roles: ["admin"] }, // get all users
  { method: "GET", path: "/api/users/:userId", roles: ["admin", "client", "worker", "seller"] }, // get specific user
  { method: "PUT", path: "/api/users/:userId/profile", roles: ["admin", "client", "worker", "seller"] }, // update profile
  { method: "PUT", path: "/api/users/:userId/role", roles: ["admin"] }, // update role
  { method: "DELETE", path: "/api/users/:userId/delete", roles: ["admin"] },

  // PRODUCTS MICRO
  { method: "GET", path: "/api/products", roles: ["admin", "seller", "worker", "client", "guest"] },
  { method: "GET", path: "/api/products/:productId", roles: ["admin", "seller", "worker", "client", "guest"] },
  { method: "POST", path: "/api/products", roles: ["admin", "seller"] },
  { method: "PUT", path: "/api/products/:productId", roles: ["admin", "seller"] },
  { method: "DELETE", path: "/api/products/:productId", roles: ["admin", "seller"] },

  // FABRICATION MICRO
  { method: "GET", path: "/api/fabrication", roles: ["admin", "seller", "worker", "client", "guest"] },
  { method: "GET", path: "/api/fabrication/:productId", roles: ["admin", "seller", "worker", "client", "guest"] },
  { method: "POST", path: "/api/fabrication", roles: ["admin", "seller", "worker"] },
  { method: "PUT", path: "/api/fabrication/:productId", roles: ["admin", "seller", "worker"] },
  { method: "DELETE", path: "/api/fabrication/:productId", roles: ["admin", "seller", "worker"] },

  // FABRICATION ORDERS MICRO
  { method: "GET", path: "/api/fabrication-orders", roles: ["admin", "seller", "worker", "client"] },
  { method: "GET", path: "/api/fabrication-orders/:OrderId", roles: ["admin", "seller", "worker", "client"] },
  { method: "POST", path: "/api/fabrication-orders", roles: ["client"] },
  { method: "DELETE", path: "/api/fabrication-orders/:OrderId", roles: ["client"] },

  // CART MICRO
  { method: "GET", path: "/api/cart/user/:userId", roles: ["client"] },
  { method: "POST", path: "/api/cart/user/:userId/items", roles: ["client"] },
  { method: "PUT", path: "/api/cart/user/:userId/items", roles: ["client"] },
  { method: "DELETE", path: "/api/cart/user/:userId/items", roles: ["client"] },
  { method: "PUT", path: "/api/cart/user/:userId", roles: ["client"] }, // replace full cart
  { method: "DELETE", path: "/api/cart/user/:userId/clear", roles: ["client"] },
  { method: "DELETE", path: "/api/cart/user/:userId", roles: ["client"] },
  { method: "GET", path: "/api/cart/guest/:guestId", roles: ["guest"] },
  { method: "POST", path: "/api/cart/guest/:guestId/items", roles: ["guest"] },
  { method: "PUT", path: "/api/cart/guest/:guestId/items", roles: ["guest"] },
  { method: "DELETE", path: "/api/cart/guest/:guestId/items", roles: ["guest"] },
  { method: "PUT", path: "/api/cart/guest/:guestId", roles: ["guest"] }, // replace full cart
  { method: "DELETE", path: "/api/cart/guest/:guestId/clear", roles: ["guest"] },
  { method: "DELETE", path: "/api/cart/guest/:guestId", roles: ["guest"] },
  { method: "POST", path: "/api/cart/merge", roles: ["client"] }
];
