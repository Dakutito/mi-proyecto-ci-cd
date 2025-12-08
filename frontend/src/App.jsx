import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    fetch("http://localhost:4000/api/saludo")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch(() =>
        setMensaje("No se pudo conectar con backend 😅")
      );
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Frontend Vite + React</h1>
      <p>Mensaje del backend:</p>
      <pre>{mensaje}</pre>
    </div>
  );
}

export default App;

