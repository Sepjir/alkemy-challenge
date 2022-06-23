CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE types (
    id SERIAL PRIMARY KEY,
    name_type VARCHAR(255) NOT NULL
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
    type_id INT NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(type_id) REFERENCES types(id)

);

CREATE TABLE income (
    id SERIAL PRIMARY KEY,
    concept VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    income_date DATE NOT NULL,
    category_id INT NOT NULL,
    user_id INT NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(type_id) REFERENCES types(id)

);