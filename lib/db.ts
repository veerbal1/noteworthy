'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export const getUsers = async () => {
  const { rows } = await sql`SELECT * from users`;
  revalidatePath('/');
  return rows;
};
