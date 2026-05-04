INSERT INTO categories (name, description) VALUES
('Electrónica', 'Dispositivos tecnológicos'),
('Hogar', 'Muebles y decoración'),
('Ropa', 'Prendas y accesorios');

INSERT INTO products (name, price, stock, category_id) VALUES
('Smartphone', 599.99, 10, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Televisor', 899.99, 5, (SELECT id FROM categories WHERE name = 'Electrónica')),
('Sofá', 299.99, 2, (SELECT id FROM categories WHERE name = 'Hogar')),
('Camiseta', 19.99, 50, (SELECT id FROM categories WHERE name = 'Ropa'));

