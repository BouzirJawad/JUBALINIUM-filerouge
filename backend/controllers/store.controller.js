// controllers/checkout.controller.js
const axios = require("axios");

exports.checkout = async (req, res) => {
  try {
    const userId = req.user._id || req.user.userId;

    // 1. Get cart items
    const cartRes = await axios.get(`${process.env.CART_SERVICE_URL}/api/cart/user/${userId}`);
    const items = cartRes.data.items;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 2. Enrich items with prices from Product micro & calculate total
    let totalAmount = 0;
    const enrichedItems = [];

    for (const item of items) {
      const productRes = await axios.get(
        `${process.env.PRODUCT_SERVICE_URL}/api/products/${item.productId}`
      );
      const product = productRes.data;

      const price = product.price || 0;
      const subtotal = price * item.quantity;
      totalAmount += subtotal;

      enrichedItems.push({
        ...item,
        price,
        subtotal,
      });
    }

    // 3. Create order
    const orderRes = await axios.post(`${process.env.ORDER_SERVICE_URL}/api/orders`, {
      userId,
      items: enrichedItems,
      totalAmount
    });

    const order = orderRes.data;

    // 4. Update product stock
    for (const item of items) {
      await axios.put(`${process.env.PRODUCT_SERVICE_URL}/api/products/${item.productId}/stock`, {
        quantity: -item.quantity,
      });
    }

    // 4. Clear cart
    await axios.delete(`${process.env.CART_SERVICE_URL}/api/cart/user/${userId}/clear`);

    res.status(201).json({ message: "Checkout successful", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Checkout failed", error: err.message });
  }
};
