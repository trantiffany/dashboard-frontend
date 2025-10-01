import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

export type DataDogType = {
  title: string;
  url: string;
};

const columns: ColumnDef<DataDogType>[] = [
  {
    accessorKey: "title",
    header: "Dashboards",
  },
  {
    accessorKey: "ticketKey",
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
const columnsMonitors: ColumnDef<DataDogType>[] = [
  {
    accessorKey: "title",
    header: "Monitors",
  },
  {
    accessorKey: "ticketKey",
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

const DatadogList = ({
  dashboards,
  monitors,
}: {
  dashboards: DataDogType[];
  monitors: DataDogType[];
}) => {
  return (
    <>
      <DataTable
        columns={columns}
        data={dashboards}
        className="overflow-y-auto max-h-100"
      />
      <div
        data-slot="card-description"
        className={"mt-5 text-muted-foreground text-sm"}
      >
        A comprehensive list of monitors from Datadog.
      </div>
      <DataTable
        columns={columnsMonitors}
        data={monitors}
        className="overflow-y-auto max-h-100"
      />
    </>
  );
};

export default DatadogList;
