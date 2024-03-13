"use client";

import { Table } from "flowbite-react";
import { customTableTheme } from "@/app/themes/tableTheme";
import { customCheckboxTheme } from "@/app/themes/checkboxTheme";
import Checkbox from "@/app/components/Checkbox";

export default function ItemsTable() {

  return (
    <div className="overflow-x-auto">
      <Table hoverable theme={customTableTheme}>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Purchase Description</Table.HeadCell>
          <Table.HeadCell>Rate</Table.HeadCell>
          <Table.HeadCell>Purchase Rate</Table.HeadCell>
          <Table.HeadCell>Usage Unit</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Zoho
            </Table.Cell>
            <Table.Cell>Zoho</Table.Cell>
            <Table.Cell>Purchased</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>$89</Table.Cell>
            <Table.Cell>1</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
