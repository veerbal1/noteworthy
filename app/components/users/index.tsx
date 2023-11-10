import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getUsers } from '@/utils';

export default async function Users(): Promise<JSX.Element> {
  // const rows = await getUsers();
  const rows: { id: string; name: string; email: string; password: string }[] =
    [];

  return (
    <div className="border border-white p-2 shadow-md">
      <Table>
        <TableCaption>A list of registered users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Password</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell className="font-medium">{row.email}</TableCell>
                <TableCell className="font-medium">{row.password}</TableCell>
              </>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
