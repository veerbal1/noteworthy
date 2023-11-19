'use server';
import { auth, signIn, signOut } from '@/auth';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { createClient, sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialsSignin';
    }
    throw error;
  }
}

const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid Email'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const noteSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
});

const deleteNoteSchema = z.object({
  id: z.string().min(1, 'ID is requieed'),
});

export async function signUpAction(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const client = createClient();
    await client.connect();
    const formDataObject = Object.fromEntries(formData);
    // Validate the form data using the Zod schema
    const validatedData = signUpSchema.parse(formDataObject);
    console.log('Validated data', validatedData);

    const { rowCount, rows: singleUser } =
      await client.sql`SELECT id FROM users WHERE email = ${validatedData.email};`;

    if (rowCount) return 'User already exists';

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const { rows } = await client.sql`
      INSERT INTO users(name, email, password) VALUES(${validatedData.name}, ${validatedData.email}, ${hashedPassword});`;
    console.log(rows);
    await client.end();
    return 'User Submitted Successfully';
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Log or return the validation error messages
      console.error(error.errors);
      return error.errors.map((err) => err.message).join(', ');
    }

    if ((error as Error).message.includes('CredentialsSignup')) {
      return 'CredentialsSignup';
    }
    return JSON.stringify(error);
  }
}

export async function noteSubmissionAction(id: string, formData: FormData) {
  try {
    const session = await auth();
    if (!session) return { message: 'Not Authorized' };
    const client = createClient();
    await client.connect();

    const formDataObject = Object.fromEntries(formData);
    // Validate the form data using the Zod schema
    const validatedData = noteSchema.parse(formDataObject);
    // console.log('New note Validated data', validatedData);
    if (id) {
      await sql`
      UPDATE notes
      SET title = ${validatedData.title}, description = ${validatedData.description}
      WHERE id = ${id} AND userId = ${session.user.id}
    `;
    } else {
      await sql`
      INSERT INTO notes (userId, title, description) VALUES (${session.user.id}, ${validatedData.title}, ${validatedData.description});
    `;
    }

    console.log('Notes Submitted Successfully');
    revalidatePath(`/notes/${id}`);
    revalidatePath(`/notes`);
    await client.end();
    redirect(`/notes/${id}`);
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      // Log or return the validation error messages
      console.error(error.errors);
      return { message: error.errors.map((err) => err.message).join(', ') };
    }
    return {
      message: JSON.stringify(error),
    };
  }
}

export async function deleteFormAction(id: string) {
  console.log('deleteFormAction', id);
  try {
    const session = await auth();
    if (!session) return { message: 'Not Authorized' };
    const client = createClient();
    await client.connect();
    // console.log('New note Validated data', validatedData);

    await sql`
      DELETE FROM notes WHERE id = ${id} AND userId = ${session.user.id};
    `;

    console.log('Notes Deleted Successfully');
    revalidatePath(`/notes`);
    revalidatePath(`/notes/${id}`);
    await client.end();
    redirect(`/notes/${id}`);
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      // Log or return the validation error messages
      console.error(error.errors);
      return { message: error.errors.map((err) => err.message).join(', ') };
    }

    return { message: JSON.stringify(error) };
  }
}

export async function logout() {
  await signOut();
}
