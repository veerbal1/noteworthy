'use server';
import { signIn, signOut } from '@/auth';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';

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

export async function signUpAction(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const formDataObject = Object.fromEntries(formData);
    // Validate the form data using the Zod schema
    const validatedData = signUpSchema.parse(formDataObject);
    console.log('Validated data', validatedData);
    const { rowCount } =
      await sql`SELECT email FROM users WHERE email = ${validatedData.email}`;
    console.log('Row Count', rowCount);
    if (rowCount) return 'User already exists';
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const { rows } = await sql`
      INSERT INTO users(name, email, password) VALUES(${validatedData.name}, ${validatedData.email}, ${hashedPassword})
    `;
    console.log(rows);
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

export async function logout() {
  await signOut();
}
