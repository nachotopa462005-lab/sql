import { db } from '@/lib/drizzle';
import { products, categories } from '@/lib/schema';
import { eq } from 'drizzle-orm';

// Definimos los encabezados CORS para permitir la conexión con el Frontend
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Permite peticiones desde cualquier origen (Vite, Vercel, etc.)
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Manejador para el método OPTIONS (necesario para que los navegadores acepten CORS)
export async function OPTIONS() {
  return Response.json({}, { headers: corsHeaders });
}

export async function GET() {
  try {
    const data = await db
      .select({
        producto: products.name,
        precio: products.price,
        categoria: categories.name
      })
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id));

    return Response.json(data, {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Error en la API:", error);
    return Response.json(
      { error: "Error interno del servidor al obtener productos" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// Ejemplo de POST por si quieres dejarlo listo para crear productos
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price, stock, categoryId } = body;

    const result = await db.insert(products).values({
      name,
      price: price.toString(), // Drizzle suele pedir decimales como string
      stock,
      categoryId,
    }).returning();

    return Response.json(result, {
      status: 201,
      headers: corsHeaders,
    });
  } catch (error) {
    return Response.json(
      { error: "Error al crear el producto" },
      { status: 500, headers: corsHeaders }
    );
  }
}