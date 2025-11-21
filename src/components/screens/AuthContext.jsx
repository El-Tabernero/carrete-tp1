import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Funciones para simular inicio y cierre de sesión
    const login = () => {
        setIsLoggedIn(true);
        console.log("Sesión iniciada: El usuario puede ver contenido.");
    };

    const logout = () => {
        setIsLoggedIn(false);
        console.log("Sesión cerrada: El usuario necesita iniciar sesión.");
    };

    // Objeto de valor que se compartirá
    const value = {
        isLoggedIn,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};