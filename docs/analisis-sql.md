# Análisis SQL

## Diferencia entre INNER JOIN y LEFT JOIN

### INNER JOIN

INNER JOIN solo devuelve los datos que tienen relación en ambas tablas.

 Ejemplo real:
Imagínate una tienda online. Si haces un INNER JOIN entre productos y categorías, solo verás los productos que tienen categoría asignada. Si hay algún producto sin categoría, no aparecerá.

 Query de ejemplo:

```sql
SELECT 
  p.name AS producto,
  p.price AS precio,
  c.name AS categoria
FROM products p
INNER JOIN categories c 
  ON p.category_id = c.id;
```

 Aquí solo salen productos que sí tienen categoría.


### LEFT JOIN

LEFT JOIN devuelve todos los datos de la tabla izquierda, aunque no tengan relación con la derecha.

 Ejemplo real:
Siguiendo con la tienda, si quieres ver todas las categorías aunque no tengan productos, usarías LEFT JOIN. Así puedes detectar categorías vacías.

 Ejemplo conceptual:

* Categoría "Ropa" → 5 productos
* Categoría "Electrónica" → 2 productos
* Categoría "Juguetes" → 0 productos

Con LEFT JOIN, "Juguetes" también aparece.


## GROUP BY y COUNT

Sirve para agrupar datos y hacer cálculos, como contar.

 Ejemplo real:
Quieres saber cuántos productos hay en cada categoría.

 Query de ejemplo:

```sql
SELECT 
  c.name AS categoria,
  COUNT(p.id) AS total_productos
FROM categories c
LEFT JOIN products p 
  ON c.id = p.category_id
GROUP BY c.name;
```

 Esto devuelve cada categoría con el número de productos que tiene, incluso si es 0.
