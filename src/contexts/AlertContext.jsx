// src/contexts/AlertContext.jsx

import { createContext, useContext, useState } from "react";

// Creiamo il contesto
const AlertContext = createContext();

// Creiamo il Provider
export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  // Funzione per mostrare un alert
  const showAlert = (message, type = "success") => {
    setAlert({ message, type });

    // L'alert sparisce dopo 3 secondi
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

// Hook personalizzato per usare il context facilmente
export const useAlertContext = () => {
  return useContext(AlertContext);
};
