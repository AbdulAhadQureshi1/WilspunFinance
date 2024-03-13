"use client";
import Checkbox from "@/app/components/Checkbox";
import DropDown from "@/app/components/DropDown";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";


const SalesInformation = () => {
  const [includeSalesInfo, setIncludeSalesInfo] = useState<boolean>();
  const handleChange = () => {
    setIncludeSalesInfo((includeSalesInfo) => !includeSalesInfo);
  };

  const [accountType, setAccountType] = useState<string | undefined>("sales");
  const [accountTypes, setAccountTypes] = useState([
    "Discount",
    "General Income",
    "Interest Income",
    "Late Fee Income",
    "Other Charges",
    "Sale",
    "Shipping Charge",
  ]);

  const [tax, setTax] = useState<string>()

  return (
    <div className="space-y-3 w-1/3">
      <Checkbox
        onChange={handleChange}
        label="Sales Information"
        className="w-4.5 h-4.5"
        labelClassName="!text-base font-semibold"
      />
      {includeSalesInfo && (
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
              placeholder="Selling Price"
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
            label="Tax"
            options={["Standard Rate (15%)", "Zero Rate (0%)"]}
            value={tax}
            setValue={setTax}
          />
        </div>
      )}
    </div>
  );
};

export default SalesInformation;
