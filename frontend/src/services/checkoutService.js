import axios from "axios";

const API = "http://localhost:7460/api/store/checkout";

export const checkout = (userId) =>
  axios.post(`${API}`, { userId });
