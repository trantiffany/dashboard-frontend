import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

export type RawTicket = {
  key: string;
  fields: {
    summary: string;
    issuetype: {
      description: string;
      name: string;
    };
    reporter: {
      emailAddress: string;
      displayName: string;
    };
    labels: string[];
    status: {
      name: string;
      statusCategory: {
        name: string;
      };
    };
    priority: {
      name: string;
    };
    customfield_10032: number;
  };
};

const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "ticketKey",
    header: "Ticket",
  },
  {
    accessorKey: "title",
    header: "Name",
  },
  {
    accessorKey: "ticketType",
    header: "Type",
  },
  {
    accessorKey: "points",
    header: "Points",
  },
  {
    accessorKey: "ticketKey",
    header: " ",
    cell: ({ row }) => {
      return (
        <a
          href={`https://redacted.atlassian.net/browse/${row.original.ticketKey}`}
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

export type Ticket = {
  ticketKey: string;
  title: string;
  ticketType: string;
  points: number;
};

const JiraList = ({ tickets }: { tickets: Ticket[] }) => {
  return (
    <DataTable
      columns={columns}
      data={tickets}
      className="overflow-y-auto max-h-100"
    />
  );
};

export default JiraList;
