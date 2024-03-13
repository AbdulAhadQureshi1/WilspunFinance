'use client'
import { PlusIcon } from "@heroicons/react/20/solid"
import { Button } from "@material-tailwind/react"
import ItemsTable from "./Table"
import Link from "next/link"

const ItemManagement = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between ">
        <h1 className="font-bold text-2xl">All Items</h1>
        <Link href={'/items/add-item'}>
        <Button placeholder={''} className="flex items-center gap-2 normal-case py-2 px-3 text-base font-normal bg-primary">
          <PlusIcon className="w-5 h-5" />
          Add Item
        </Button>
        </Link>
      </div>
      <ItemsTable />
    </div>
  )
}

export default ItemManagement
