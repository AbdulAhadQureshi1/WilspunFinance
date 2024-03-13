"use client";

import { Button } from "@material-tailwind/react";
import ItemDetails from "./ItemDetails";
import PurchaseInformation from "./PurchaseInformation";
import SalesInformation from "./SalesInformation";
import Link from "next/link";

const AddItemPage = () => {
  return (
    <div>
      <div className="flex justify-between items-end">
        <h1 className="font-bold text-2xl">New Item</h1>
        <Link href={'/items'} className="text-blue-500 text-sm">Back to Items</Link>
      </div>
      <hr className="my-2" />
      <div className="space-y-10 mt-8">
        <ItemDetails />
        <div className="flex gap-5">
          <SalesInformation />
          <PurchaseInformation />
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
