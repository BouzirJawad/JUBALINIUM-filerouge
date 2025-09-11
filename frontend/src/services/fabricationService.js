import axios from "axios";

const API = "http://localhost:7460/api/fabrication";

export const getFabricationProducts = () => axios.get(`${API}`);
export const getFabricationProduct = (productId) => axios.get(`${API}/${productId}`);
export const createFabricationProduct = (data) => axios.post(`${API}`, data);
export const updateFabricationProduct = (productId, data) => axios.put(`${API}/${productId}`, data);
export const deleteFabricationProduct = (productId) => axios.delete(`${API}/${productId}`);
