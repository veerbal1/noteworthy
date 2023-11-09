'use server';

import { sql } from '@vercel/postgres';

export const getUsers = async () => {
  const { rows } = await sql`SELECT * from users`;
  return rows;
};
