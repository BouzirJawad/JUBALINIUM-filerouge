import axios from "axios";

const API = "http://localhost:7460/api/products";

export const getProducts = () => axios.get(`${API}`);
export const getProduct = (productId) => axios.get(`${API}/${productId}`);
export const createProduct = (data) => axios.post(`${API}`, data);
export const updateProduct = (productId, data) => axios.put(`${API}/${productId}`, data);
export const deleteProduct = (productId) => axios.delete(`${API}/${productId}`);
