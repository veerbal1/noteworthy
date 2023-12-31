const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS users`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        publicId SERIAL UNIQUE NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const hashedPassword1 = await bcrypt.hash('dummyuser', 10);
    const hashedPassword2 = await bcrypt.hash('veerbal', 10);
    await client.sql`
    INSERT INTO users (id, name, email, password)
    VALUES (${'410544b2-4001-4271-9855-fec4b6a6442b'}, ${'Dummy User'}, ${'user@nextmail.com'}, ${hashedPassword1})
    ON CONFLICT (id) DO NOTHING;
  `;

    await client.sql`
    INSERT INTO users (id, name, email, password)
    VALUES (${'410544b2-4001-4271-9855-fec4b6a6442c'}, ${'Veerbal Singh'}, ${'veerbal@gmail.com'}, ${hashedPassword2})
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

async function seedNotes(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS notes`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS notes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      userId UUID NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
    );
    `;

    await client.sql`
    INSERT INTO notes (userId, title, description)
    VALUES 
    ('410544b2-4001-4271-9855-fec4b6a6442b', 'Grocery Shopping List', 'Milk, Eggs, Bread, Butter, Apples'),
    ('410544b2-4001-4271-9855-fec4b6a6442b', 'Work Meeting Notes', 'Discuss project deadlines, Allocate tasks, Review budget constraints'),
    ('410544b2-4001-4271-9855-fec4b6a6442b', 'Book Recommendations', '1984 by George Orwell, To Kill a Mockingbird by Harper Lee, The Great Gatsby by F. Scott Fitzgerald'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Debugging Tips', '1. Check for syntax errors. 2. Use logging to track variable states. 3. Review recent code changes.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Weekly Sprint Plan', 'Tasks: 1. Complete user authentication module. 2. Start database schema design for the new feature. 3. Fix reported bugs in the issue tracker.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Learning Resources', 'Books: Clean Code, Design Patterns. Online Courses: Advanced JavaScript, Database Management Systems.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'API Integration Guidelines', 'Steps: 1. Define endpoint requirements. 2. Set up authentication. 3. Implement error handling and data parsing.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Code Review Checklist', 'Checklist: 1. Ensure coding standards are met. 2. Look for potential bugs. 3. Assess overall code quality and performance.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Project Milestones', 'Milestones: 1. Initial prototype completion. 2. User testing phase. 3. Final deployment and documentation.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Performance Optimization Tips', 'Tips: 1. Profiling critical sections. 2. Optimize database queries. 3. Reduce unnecessary computations.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Front-End Framework Comparison', 'Comparing: React vs Vue vs Angular - Pros and cons, community support, and use cases.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Team Meeting Agenda', 'Agenda: 1. Discuss upcoming sprint goals. 2. Review team feedback. 3. Plan for next quarter objectives.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Security Best Practices', 'Best Practices: 1. Regularly update dependencies. 2. Implement proper encryption. 3. Conduct security audits.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Cloud Service Providers Comparison', 'Comparison: AWS vs Azure vs Google Cloud - Features, pricing, and scalability.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Mobile App Development Strategies', 'Strategies: 1. Native vs Cross-platform. 2. User experience design. 3. Backend integration.'),
    ('410544b2-4001-4271-9855-fec4b6a6442c', 'Continuous Integration Workflow', 'Workflow Steps: 1. Setting up CI pipeline. 2. Automating tests. 3. Managing build and deployment.');
    `;
    console.log('Seeded notes');
  } catch (error) {
    console.error('Error seeding notes:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  // await seedNotes(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
