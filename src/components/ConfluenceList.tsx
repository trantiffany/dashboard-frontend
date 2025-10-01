import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

const columns: ColumnDef<Page>[] = [
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      return date.toLocaleDateString("en-US");
    },
  },
  {
    accessorKey: "url",
    header: " ",
    cell: ({ row }) => {
      return (
        <a
          href={row.original.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open in new tab"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <MdOpenInNew className="w-5 h-5 text-primary" />
        </a>
      );
    },
  },
];

export type Page = {
  author: string;
  title: string;
  date: Date;
  url: string;
};

const ConfluenceList = ({ pages }: { pages: Page[] }) => {
  return (
    <DataTable
      columns={columns}
      data={pages}
      className="overflow-y-auto max-h-100"
    />
  );
};

export default ConfluenceList;
