CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL
);


CREATE TABLE types (
    id SERIAL PRIMARY KEY,
    name_type VARCHAR(255) NOT NULL
);


CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY(type_id) REFERENCES types(id)
);

CREATE TABLE balance (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    amount INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE expenditures (
    id SERIAL PRIMARY KEY,
    concept VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    expenditure_date DATE NOT NULL,
    category_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(id),
    FOREIGN KEY(user_id) REFERENCES users(id)

);

CREATE TABLE income (
    id SERIAL PRIMARY KEY,
    concept VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    income_date DATE NOT NULL,
    category_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(id),
    FOREIGN KEY(user_id) REFERENCES users(id)

);

-- Constantes
--Types
INSERT INTO types(name_type) VALUES ('Ingreso');
INSERT INTO types(name_type) VALUES ('Egreso');

-- Categories (Egresos)
INSERT INTO categories (category_name, type_id) VALUES ('Comida', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Luz', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Agua', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Internet', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Telefono', 2);
INSERT INTO categories (category_name, type_id) VALUES ('TV Cable', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Deudas', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Arriendo', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Colegio', 2);
INSERT INTO categories (category_name, type_id) VALUES ('Trabajo', 2);

-- (Ingresos)
INSERT INTO categories (category_name, type_id) VALUES ('Venta', 1);
INSERT INTO categories (category_name, type_id) VALUES ('Trabajo', 1);
INSERT INTO categories (category_name, type_id) VALUES ('Freelancer', 1);
INSERT INTO categories (category_name, type_id) VALUES ('Arriendo', 1);
INSERT INTO categories (category_name, type_id) VALUES ('Servicio', 1);

-- Base user
INSERT INTO users (user_name, mail, pass) VALUES ('Ignacio', 'ignacio.moenen@gmail.com', '123456');

