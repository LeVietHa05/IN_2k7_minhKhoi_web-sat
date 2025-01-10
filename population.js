// eslint-disable-next-line @typescript-eslint/no-require-imports
const sqlite3 = require('sqlite3').verbose();
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { faker } = require('@faker-js/faker');

// Connect to the SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('userdata.db');

// Function to create the users table
const createUsersTable = () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating users table', err);
        } else {
            console.log('Users table created successfully.');
            insertUsers(); // Insert users after table creation
        }
    });
};

// Function to generate and insert 10 users
const insertUsers = () => {
    const insertUserQuery = `
    INSERT INTO users (name, email, phone, password)
    VALUES (?, ?, ?, ?)
  `;

    for (let i = 0; i < 10; i++) {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            password: faker.internet.password(),
        };

        db.run(insertUserQuery, [user.name, user.email, user.phone, user.password], (err) => {
            if (err) {
                console.error('Error inserting user', err);
            } else {
                console.log('User inserted:', user);
            }
        });
    }
};

// Create the users table and insert users
createUsersTable();

// Close the database connection after a delay to ensure all operations complete
setTimeout(() => {
    db.close((err) => {
        if (err) {
            console.error('Error closing the database', err);
        } else {
            console.log('Database connection closed.');
        }
    });
}, 5000);