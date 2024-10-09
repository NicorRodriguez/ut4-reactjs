import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Estado inicial del contador

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);
    document.title = "Contador: " +  (count + 1)
  };

  // Función para decrementar el contador (siempre y cuando no sea menor que 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      document.title = "Contador: " +  (count -1)
    }
  };

  // Función para reiniciar el contador a 0
  const reset = () => {
    setCount(0);
    document.title = "Contador: 0"
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default Counter;
