import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Actualizar la fecha y hora cada segundo
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  // Formatear la fecha y hora
  const formatDateTime = (date) => {
    return `Fecha: ${date.toLocaleDateString()} Hora:${date.toLocaleTimeString()}`;
  };

  return (
    <div>
      <p>{formatDateTime(dateTime)}</p>
    </div>
  );
};

export default CurrentDateTime;