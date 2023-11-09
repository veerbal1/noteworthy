import UsersList from './components/get-users';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>NoteWorthy</h1>
      <UsersList />
    </main>
  );
}
