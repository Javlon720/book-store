CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    author_id INT REFERENCES authors(id) ON DELETE CASCADE
);