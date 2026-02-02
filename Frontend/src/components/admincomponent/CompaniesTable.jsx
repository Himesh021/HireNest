import { Edit2, MoreHorizontal, Table } from "lucide-react";
import React from "react";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>Your recent registerd Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage
                src="c:\Users\Lenovo\Downloads\logo3.jpg"
                alt=" company logo"
              ></AvatarImage>
            </Avatar>
          </TableCell>
          <TableCell>Microsoft</TableCell>
          <TableCell>01-01-2025</TableCell>
          <TableCell className="text-right cursor -pointer">
            <Popover>
              <PopoverTrigger>
                {" "}
                <MoreHorizontal />{" "}
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="flex items-center gap-2 w-fit cursor-pointer">
                  <Edit2 className="w-4"></Edit2>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
