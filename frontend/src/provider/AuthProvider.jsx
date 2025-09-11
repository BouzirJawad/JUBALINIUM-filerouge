import axios from "axios";
import { createContext, useContext, useMemo, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    axios.defaults.headers.common["Authorization"] = "Bearer " + newToken;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      user,
      loading,
      login,
      logout,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
