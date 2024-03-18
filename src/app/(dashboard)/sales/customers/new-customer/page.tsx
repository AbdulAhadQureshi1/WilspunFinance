import Link from "next/link"
import PrimaryForm from "./PrimaryForm"

const NewCustomer = () => {
  return (
    <div>
      <div className="flex justify-between items-end">
        <h1 className="font-semibold text-2xl">New Customer</h1>
        <Link href={'/sales/customers'} className="text-blue-500 text-sm">Back</Link>
      </div>
      <hr className="my-2" />
      <div className="space-y-10 mt-8">
        <PrimaryForm />
      </div>
    </div>
  )
}

export default NewCustomer
