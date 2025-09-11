import axios from "axios";

const API = "http://localhost:7460/api/orders";

// Get all store orders (admin/seller)
export const getOrders = () => axios.get(`${API}`);

// Get specific order
export const getOrder = (orderId) => axios.get(`${API}/${orderId}`);

// Create a new order (client)
export const createOrder = (data) => axios.post(`${API}`, data);

// Cancel an order (client)
export const cancelOrder = (orderId) => axios.delete(`${API}/${orderId}`);
