'use client';

import { authenticate } from '@/lib/actions';

import { useFormState, useFormStatus } from 'react-dom';

function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch}>
      <div className="p-4 flex justify-center items-center gap-4">
        <input name="email" type="text" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          min={6}
        />
        <LoginButton />

        <div className="flex h-8 items-end space-x-1">
          {state === 'CredentialsSignin' && (
            <>
              <p aria-live="polite" className="text-sm text-red-500">
                Invalid credentials
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={`mt-4 w-full ${pending ? 'bg-black' : ''}`}
      disabled={pending}
    >
      Log in
    </button>
  );
}

export default LoginForm;
