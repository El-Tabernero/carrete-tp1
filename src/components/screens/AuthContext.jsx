import React, { createContext, useContext, useState } from 'react';
import {useMutation} from "@tanstack/react-query";
import { login as loginService} from '../services/users';
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // React Query: login mutation
  const loginMutation = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      setUser(data);
      setIsLoggedIn(true);
      setError("");
      setIsLoading(false);
    },
    onError: () => {
      setError("Usuario o contraseña incorrectos");
      setIsLoading(false);
    },
  });

  const handleLogin = (credentials) => {
    loginMutation.mutate(credentials);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        isLoggedIn,
        error,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};