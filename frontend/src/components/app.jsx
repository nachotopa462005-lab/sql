import { useEffect, useState } from 'react';

export default function App() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Usamos tu URL de Vercel (importante que sea https)
    const url = 'https://sql-back.vercel.app/api/products';

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error en la respuesta: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProductos(data);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setError("No se pudo conectar con la API.");
      });
  }, []);

  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>
        <h2>⚠️ Error: {error}</h2>
        <p>Asegúrate de que el backend esté encendido y tenga configurado el CORS correctamente.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Inventario de Productos</h1>
      
      {productos.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Cargando datos...</p>
      ) : (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#2c3e50', color: 'white' }}>
            <tr>
              <th style={{ padding: '12px' }}>Producto</th>
              <th style={{ padding: '12px' }}>Precio</th>
              <th style={{ padding: '12px' }}>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item, index) => (
              <tr key={index} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{item.producto}</td>
                <td style={{ padding: '10px' }}>${item.precio}</td>
                <td style={{ padding: '10px' }}>
                   {item.categoria || <span style={{ color: '#888' }}>Sin categoría</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}