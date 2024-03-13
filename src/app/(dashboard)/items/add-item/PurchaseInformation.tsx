"use client";
import Checkbox from "@/app/components/Checkbox";
import DropDown from "@/app/components/DropDown";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";


const PurchaseInformation = () => {
  const [includePurchaseInfo, setincludePurchaseInfo] = useState<boolean>();
  const handleChange = () => {
    setincludePurchaseInfo((includePurchaseInfo) => !includePurchaseInfo);
  };

  const [accountType, setAccountType] = useState<string | undefined>("sales");
  const [accountTypes, setAccountTypes] = useState([
    "Cost of Goods",
    "Repairs and Maintenance",
    "Telephone Expense",
    "Travel Expense",
    "Salaries and Employee Wages",
    "Uncategorized",
    "Rent Expense",
  ]);

  const [vendor, setVendor] = useState<string>()
  const [vendors, setVendors] = useState([])

  return (
    <div className="space-y-3">
      <Checkbox
        onChange={handleChange}
        label="Purchase Information"
        className="w-4.5 h-4.5"
        labelClassName="!text-base font-semibold"
      />
      {includePurchaseInfo && (
        <div className="space-y-4 w-72">
          <div className="relative flex">
            <Button
              placeholder={""}
              ripple={false}
              variant="text"
              color="blue-gray"
              className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 disabled:!opacity-100"
              disabled
            >
              SAR
            </Button>

            <Input
              crossOrigin={""}
              type="number"
              placeholder="Cost Price"
              className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
          <DropDown
            label="Account"
            options={accountTypes}
            value={accountType}
            setValue={setAccountType}
          />
          <Textarea label="Description" />
          <DropDown
            label="Preferred Vendor"
            options={vendors}
            value={vendor}
            setValue={setVendor}
          />
        </div>
      )}
    </div>
  );
};

export default PurchaseInformation;
