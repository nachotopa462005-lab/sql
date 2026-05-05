import { useEffect, useState } from 'react';

export default function App() {
  // Borramos el <Producto[]> y el <string | null>
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://sql-back.vercel.app/api/products';

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta del servidor');
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Panel de Inventario</h1>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f4f4f4' }}>
            <tr>
              <th style={{ padding: '10px' }}>Producto</th>
              <th style={{ padding: '10px' }}>Precio</th>
              <th style={{ padding: '10px' }}>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px' }}>{item.producto}</td>
                <td style={{ padding: '10px' }}>${item.precio}</td>
                <td style={{ padding: '10px' }}>{item.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}