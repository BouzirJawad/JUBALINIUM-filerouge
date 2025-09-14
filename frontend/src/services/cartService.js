// src/services/cartService.js
import axios from "axios";

const API = "http://localhost:7460/api/cart";

// -------------------- User Cart --------------------
export const getCart = (userId) => axios.get(`${API}/user/${userId}`);
export const addItem = (userId, productId, quantity) =>
  axios.post(`${API}/user/${userId}/items`, { productId, quantity });
export const updateItem = (userId, productId, quantity) =>
  axios.put(`${API}/user/${userId}/items`, { productId, quantity });
export const removeItem = (userId, productId) =>
  axios.delete(`${API}/user/${userId}/items`, { data: { productId } });
export const clearCart = (userId) =>
  axios.delete(`${API}/user/${userId}/clear`);

// -------------------- Guest Cart --------------------
export const getGuestCart = (guestId) => axios.get(`${API}/guest/${guestId}`);
export const addGuestItem = (guestId, productId, quantity) =>
  axios.post(`${API}/guest/${guestId}/items`, { productId, quantity });
export const updateGuestItem = (guestId, productId, quantity) =>
  axios.put(`${API}/guest/${guestId}/items`, { productId, quantity });
export const removeGuestItem = (guestId, productId) =>
  axios.delete(`${API}/guest/${guestId}/items`, { data: { productId } });
export const clearGuestCart = (guestId) =>
  axios.delete(`${API}/guest/${guestId}/clear`);

// -------------------- Merge --------------------
export const mergeGuestToUser = (userId, guestId) =>
  axios.post(`${API}/merge`, { userId, guestId });

