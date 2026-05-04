# Arquitectura de datos

## ¿Qué significa que `category_id` sea una foreign key?

Que `category_id` en la tabla de productos apunta al `id` de la tabla categories.
Es decir, no puedes poner cualquier valor ahí, solo IDs que ya existan en categories.

Básicamente sirve para conectar las dos tablas y asegurar que los datos tengan sentido.
Por ejemplo, no puedes crear un producto con una categoría que no existe.


## ¿Qué pasa al hacer DELETE sobre una categoría con productos?

Si borras una categoría que tiene productos asociados, hay dos opciones:

* **ON DELETE CASCADE**: se borran también todos los productos de esa categoría.
* **ON DELETE RESTRICT**: no te deja borrar la categoría si tiene productos.


## ¿Cuál es más seguro?

Para mí, lo más seguro es **ON DELETE RESTRICT**, porque evita borrar datos sin querer.

Con CASCADE podrías eliminar una categoría y sin darte cuenta borrar todos los productos relacionados, lo cual puede ser peligroso.

En cambio, con RESTRICT la base de datos te obliga a pensar antes de borrar, y primero tendrías que eliminar o reasignar los productos.
