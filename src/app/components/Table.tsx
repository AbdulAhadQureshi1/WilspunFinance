"use client";

import { Table } from "flowbite-react";
import { customTableTheme } from "@/app/themes/tableTheme";
import Checkbox from "@/app/components/Checkbox";

interface DataTable {
  columns: Array<string>;
  data: Array<Array<string>>;
}

export default function DataTable({ columns, data }: DataTable) {
  return (
    <div className="overflow-x-auto">
      <Table hoverable theme={customTableTheme}>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          {columns.map((column, index) => (
            <Table.HeadCell key={index}>{column}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              {row.map((cell, index_) => (
                <>
                  <Table.Cell key={index_}>{cell}</Table.Cell>
                </>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
