import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { MdOpenInNew } from "react-icons/md";

export type PullRequests = {
  title: string;
  url: string;
  status: string;
  type: "Review Requested" | "Authored";
};

const columns: ColumnDef<PullRequests>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "type",
    header: "Type",
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

const GithubList = ({ pullRequests }: { pullRequests: PullRequests[] }) => {
  return (
    <DataTable
      columns={columns}
      data={pullRequests}
      className="overflow-y-auto max-h-100"
    />
  );
};

export default GithubList;
