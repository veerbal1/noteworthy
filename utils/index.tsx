'use server';

import { sql } from '@vercel/postgres';

export const getUsers = async () => {
  const { rows } = await sql`SELECT * from users`;
  console.log('----Rows-----', rows);
  return rows;
};
