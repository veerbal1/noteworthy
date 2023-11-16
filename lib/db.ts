'use server';

import { auth } from '@/auth';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export const getUsers = async () => {
  const { rows } = await sql`SELECT * from users`;
  revalidatePath('/');
  return rows;
};

export const getNotes = async (email: string | null | undefined) => {
  const session = await auth();
  const { user } = session || { user: null };
  if (!email) return [];
  const { rows } = await sql`
    SELECT notes.id, notes.title, notes.description 
    FROM notes 
    INNER JOIN users ON notes.userId = users.id
    WHERE users.id = ${user?.id};
    `;
  return rows;
};
