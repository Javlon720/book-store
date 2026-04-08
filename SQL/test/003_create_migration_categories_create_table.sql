CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name TEXT,
    book_id INT REFERENCES books(id) ON DELETE CASCADE
);