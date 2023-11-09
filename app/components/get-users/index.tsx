import { getUsers } from '@/utils';

export default async function Users(): Promise<JSX.Element> {
  const rows = await getUsers();

  return <div>{JSON.stringify(rows)}</div>;
}
