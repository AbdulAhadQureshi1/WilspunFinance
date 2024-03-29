'use client'
import { PlusIcon } from "@heroicons/react/20/solid"
import { Button } from "@material-tailwind/react"
import Link from "next/link"
import DataTable from "@/app/components/Table"

const columns = [
  "Name",
  "Description",
  "Purchase Description",
  "Rate",
  "Purchase Rate",
  "Usage Unit",
]
const data = [
  [
    "Zoho",
    "Zoho",
    "Purchased",
    "$99",
    "$89",
    "1",
  ],
]
const ItemManagement = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between ">
        <h1 className="font-semibold text-2xl">All Items</h1>
        <Link href={'/items/add-item'}>
        <Button placeholder={''} className="flex items-center gap-2 normal-case py-2 px-3 text-base font-normal bg-primary">
          <PlusIcon className="w-5 h-5" />
          New
        </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default ItemManagement
