import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableAction from "./TableAction";
import { DisplayDataProps } from "@/interface/UserInterface";


function DisplayData({ data }: DisplayDataProps) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">name</TableHead>
          <TableHead>email</TableHead>
          <TableHead>profile</TableHead>
          <TableHead>createdAt</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.profile}</TableCell>
            <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
            <TableCell className="flex gap-2 justify-content-end">
              <TableAction user={user} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{data?.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
export default DisplayData;
