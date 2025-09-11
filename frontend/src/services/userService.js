import axios from "axios";

const API = "http://localhost:7460/api/users";

export const getUsers = () => axios.get(`${API}`);
export const getUser = (userId) => axios.get(`${API}/${userId}`);
export const updateProfile = (userId, data) => axios.put(`${API}/${userId}/profile`, data);
export const updateRole = (userId, role) => axios.put(`${API}/${userId}/role`, { role });
export const deleteUser = (userId) => axios.delete(`${API}/${userId}/delete`);
