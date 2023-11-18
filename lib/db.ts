'use server';

import { auth } from '@/auth';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { NotesContent } from './definitions';

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

export const getNotesContent = async (notesId: string) => {
  const session = await auth();
  const { user } = session || { user: null };
  const { rows, rowCount } = await sql<NotesContent>`
  SELECT notes.id, notes.title, notes.description 
  FROM notes 
  INNER JOIN users ON notes.userId = users.id
  WHERE users.id = ${user?.id} AND notes.id = ${notesId};
  `;

  if (rowCount) {
    return {
      status: {
        type: 'success',
        message: 'Found',
      },
      rows: rows,
    };
  } else {
    return {
      status: {
        type: 'error',
        message: 'Not Found',
      },
      rows: rows,
    };
  }
};
