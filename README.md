![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Back Native](https://img.shields.io/badge/Back_Native-111111?style=for-the-badge)
![Next](https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

# Learning inventory 

Logline

Descripcion breve

| Despliegue | URL |
| ---------- | --- |
| Frontend | [Vercel](https://sql-1yah.vercel.app/) |

---

## Caracteristicas

- Inventario de productos conectado a una API backend desplegada en Vercel.
- Listado de productos en tabla con nombre, precio y categoria.
- Consumo de datos desde el frontend mediante `fetch` contra `/api/products`.
- API REST con endpoint `GET /api/products` para consultar productos y categorias.
- Endpoint `POST /api/products` preparado para crear nuevos productos.
- Base de datos relacional con tablas `products` y `categories`.
- Relacion entre productos y categorias mediante foreign key `category_id`.
- Consulta con `LEFT JOIN` para mostrar productos aunque no tengan categoria asociada.
- Manejo de CORS para permitir peticiones desde el frontend desplegado.
- Scripts SQL de esquema y datos iniciales para crear y poblar la base de datos.

---

## Tecnologias

| Frontend | Uso |
| -------- | --- |
| React | Construccion de la interfaz del inventario. |
| Vite | Entorno de desarrollo y build del frontend. |
| JavaScript / JSX | Componentes, estado y renderizado de la tabla. |
| CSS | Estilos globales de la aplicacion. |
| Fetch API | Conexion del frontend con el backend desplegado. |

| Backend | Uso |
| ------- | --- |
| Next.js | API Routes para exponer el endpoint `/api/products`. |
| TypeScript | Tipado del backend y definicion de rutas. |
| Neon | Base de datos PostgreSQL serverless. |
| Drizzle ORM | Conexion, consultas y definicion del esquema de datos. |
| PostgreSQL / SQL | Modelo relacional, tablas, inserts y consultas. |

| Auxiliares | Uso |
| ---------- | --- |
| Vercel | Despliegue del frontend y backend. |
| npm | Gestion de dependencias y scripts del proyecto. |
| ESLint | Revision estatica del codigo en la app Next.js. |
| Tailwind CSS | Configuracion de estilos incluida en la app Next.js. |
| Documentacion Markdown | Explicacion de joins, claves foraneas y arquitectura de datos. |

---

## Estructura del proyecto

```text
.
+-- docs/
+-- frontend/
+-- mi-app/
+-- node_modules/
+-- package-lock.json
+-- package.json
+-- schema.sql
`-- seed.sql
```

---

## Descargar y ejecutar

```bash
git clone https://github.com/user/proyecto.git
cd proyecto
npm install
npm run dev
```

---

## Desplegar en Vercel

### Frontend

1. https://sql-1yah.vercel.app/

### Backend
    
1. https://sql-back.vercel.app/api/products


Desarrollado durante las practicas en [Campus GitHub](https://github.com/nachotopa462005-lab/sql) - Mayo 2026.
