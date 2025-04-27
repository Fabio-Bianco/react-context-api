// src/components/Alert.jsx

import { useAlertContext } from "../contexts/AlertContext";
import './Alert.css'; // Importiamo il CSS

const Alert = () => {
  const { alert } = useAlertContext();

  if (!alert) return null; // Se non c'è alert, non mostriamo nulla

  return (
    <div className={`alert ${alert.type}`}>
      {alert.message}
    </div>
  );
};

export default Alert;
