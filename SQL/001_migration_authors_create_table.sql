CREATE TABLE authors(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL CHECK (email LIKE '%@%.%'),
    age INT CHECK(age >= 1)
);


