import { sql } from '@/lib/db';

// Maneja peticiones GET: http://localhost:3000/api/products
export async function GET() {
  try {
    const data = await sql`
      SELECT 
        p.name AS producto,
        p.price AS precio,
        c.name AS categoria
      FROM products p
      INNER JOIN categories c 
        ON p.category_id = c.id
    `;
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
}

// Maneja peticiones POST: http://localhost:3000/api/products
export async function POST(req: Request) {
  try {
    const { name, price, stock, category_id } = await req.json();

    await sql`
      INSERT INTO products (name, price, stock, category_id)
      VALUES (${name}, ${price}, ${stock}, ${category_id})
    `;

    return Response.json({ message: 'Producto creado' }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Error al crear producto' }, { status: 500 });
  }
}