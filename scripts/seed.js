const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const hashedPassword1 = await bcrypt.hash('dummyuser', 10);
    const hashedPassword2 = await bcrypt.hash('veerbal', 10);
    await client.sql`
    INSERT INTO users (id, name, email, password)
    VALUES (${"410544b2-4001-4271-9855-fec4b6a6442b"}, ${'Dummy User'}, ${'user@nextmail.com'}, ${hashedPassword1})
    ON CONFLICT (id) DO NOTHING;
  `;

    await client.sql`
    INSERT INTO users (id, name, email, password)
    VALUES (${"410544b2-4001-4271-9855-fec4b6a6442c"}, ${'Veerbal Singh'}, ${'veerbal@gmail.com'}, ${hashedPassword2})
    ON CONFLICT (id) DO NOTHING;
  `;

    console.log(`Seeded users`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
