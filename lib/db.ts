'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export const getUsers = async () => {
  const { rows } = await sql`SELECT * from users`;
  revalidatePath('/');
  return rows;
};

export const getNotes = async (email: string | null | undefined) => {
  if (!email) return [];
  const { rows: userRows, rowCount: userRowCount } =
    await sql`SELECT * FROM users WHERE email = ${email}`;
  if (userRowCount === 0) return [];
  const user = userRows[0];
  const { rows } = await sql`SELECT * FROM notes WHERE userId = ${user.id}`;
  return rows;
};
