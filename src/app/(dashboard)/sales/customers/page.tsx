'use client'
import DataTable from "@/app/components/Table"
import { PlusIcon } from "@heroicons/react/20/solid"
import { Button } from "@material-tailwind/react"
import Link from "next/link"

const columns = [
    'Name',
    'Email',
    'Work Phone',
    'Company Name',
    'Recievables',
]

const data = [
    [
        'John Doe',
        'john.doe@example.com',
        '(555) 123-4567',
        'XYZ Inc.',
        'SAR. 0.00',
    ]
]

const Customers = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between ">
        <h1 className="font-semibold text-2xl">All Customers</h1>
        <Link href={'./customers/new-customer'}>
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

export default Customers
