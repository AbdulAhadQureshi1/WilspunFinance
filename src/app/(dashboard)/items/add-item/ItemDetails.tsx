import Checkbox from "@/app/components/Checkbox";
import DropDown from "@/app/components/DropDown";
import { Input } from "@material-tailwind/react";
import { useState } from "react";

const itemTypes = ["Goods", "Services"];
const units = [
  "box",
  "cm",
  "dz",
  "ft",
  "g",
  "in",
  "kg",
  "km",
  "lb",
  "mg",
  "ml",
  "m",
  "pcs",
];
const ItemDetails = () => {
  const [type, setType] = useState<string | undefined>("Goods");
  const [unit, setUnit] = useState<string | undefined>();
  return (
    <div className="space-y-5">
      <DropDown
        label="Type of item"
        options={itemTypes}
        className="max-w-72"
        value={type}
        setValue={setType}
      />
      <div className="flex gap-2 max-w-xl">
        <Input crossOrigin={""} label="Name (Native Language)" />
        <Input crossOrigin={""} label="Name (Arabic)" />
      </div>
      <div className="space-y-2">
        <DropDown
          label="Unit"
          options={units}
          className="max-w-72"
          value={unit}
          setValue={setUnit}
        />
        {type === "Services" && (
          <Checkbox label="It is a digital service" labelClassName="text-sm"/>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
