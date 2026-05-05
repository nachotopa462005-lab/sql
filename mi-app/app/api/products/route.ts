import { db } from '@/lib/drizzle';
import { products } from '@/lib/schema';

export async function GET() {
  const data = await db.select().from(products);

  return Response.json(data);
}