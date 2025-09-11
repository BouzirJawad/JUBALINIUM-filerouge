import axios from "axios";

const API = "http://localhost:7460/api/fabrication-orders";

// Get all fabrication orders (admin/seller/worker/client)
export const getFabricationOrders = () => axios.get(`${API}`);

// Get specific fabrication order
export const getFabricationOrder = (orderId) => axios.get(`${API}/${orderId}`);

// Create a new fabrication order (client)
export const createFabricationOrder = (data) => axios.post(`${API}`, data);

// Cancel a fabrication order (client)
export const cancelFabricationOrder = (orderId) => axios.delete(`${API}/${orderId}`);
