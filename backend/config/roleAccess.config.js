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
  { method: "GET", path: "/api/products", roles: ["admin", "seller", "client", "guest"] }, // get all products
  { method: "GET", path: "/api/products/:productId", roles: ["admin", "seller", "client", "guest"] }, // get specific product
  { method: "POST", path: "/api/products", roles: ["admin", "seller"] }, //create a product
  { method: "PUT", path: "/api/products/:productId", roles: ["admin", "seller"] }, //update a product
  { method: "DELETE", path: "/api/products/:productId", roles: ["admin", "seller"] }, //Delete

  // FABRICATION MICRO
  { method: "GET", path: "/api/fabrication", roles: ["admin", "worker", "client", "guest"] }, //get fproducts
  { method: "GET", path: "/api/fabrication/:productId", roles: ["admin", "worker", "client", "guest"] }, // get specific fproduct
  { method: "POST", path: "/api/fabrication", roles: ["admin", "worker"] }, //create a fproduct
  { method: "PUT", path: "/api/fabrication/:productId", roles: ["admin", "worker"] }, //update a fproduct
  { method: "DELETE", path: "/api/fabrication/:productId", roles: ["admin", "worker"] }, //delete

  // FABRICATION ORDERS MICRO
  { method: "GET", path: "/api/fabrication-orders", roles: ["admin", "worker"] },
  { method: "GET", path: "/api/fabrication-orders/:orderId", roles: ["admin", "worker", "client"] },
  { method: "POST", path: "/api/fabrication-orders", roles: ["admin", "client"] },
  { method: "PUT", path: "/api/fabrication-orders/:orderId", roles: ["admin", "client", "worker"] },
  { method: "DELETE", path: "/api/fabrication-orders/:orderId", roles: ["admin", "client", "worker"] },

  // CART MICRO
  { method: "GET", path: "/api/cart/user/:userId", roles: ["client"] },
  { method: "POST", path: "/api/cart/user/:userId/items", roles: ["client"] },
  { method: "PUT", path: "/api/cart/user/:userId/items", roles: ["client"] },
  { method: "DELETE", path: "/api/cart/user/:userId/items", roles: ["client"] },
  { method: "PUT", path: "/api/cart/user/:userId", roles: ["client"] }, // replace full cart
  { method: "DELETE", path: "/api/cart/user/:userId/clear", roles: ["client"] },
  { method: "DELETE", path: "/api/cart/user/:userId", roles: ["client", "admin"] },
  { method: "GET", path: "/api/cart/guest/:guestId", roles: ["guest"] },
  { method: "POST", path: "/api/cart/guest/:guestId/items", roles: ["guest"] },
  { method: "PUT", path: "/api/cart/guest/:guestId/items", roles: ["guest"] },
  { method: "DELETE", path: "/api/cart/guest/:guestId/items", roles: ["guest"] },
  { method: "PUT", path: "/api/cart/guest/:guestId", roles: ["guest"] }, // replace full cart
  { method: "DELETE", path: "/api/cart/guest/:guestId/clear", roles: ["guest"] },
  { method: "DELETE", path: "/api/cart/guest/:guestId", roles: ["guest", "admin"] },
  { method: "POST", path: "/api/cart/merge", roles: ["client", "admin"] }
];
