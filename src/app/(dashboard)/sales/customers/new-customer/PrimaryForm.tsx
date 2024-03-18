"use client"
import DropDown from "@/app/components/DropDown"
import { Input } from "@material-tailwind/react";
import { useState } from "react";

const PrimaryForm = () => {
    const [type, setType] = useState<string | undefined>("Business");
    const [salutation, setSalutation] = useState<string | undefined>("Mr")
  return (
    <div className="space-y-5">
      <DropDown label="Customer Type" options={["Business", "Individual"]} value={type} setValue={setType} className="max-w-72" />
      <div className="flex gap-3">
        <DropDown label="Salutation" options={["Mr", "Mrs.", "Ms.", "Miss", "Dr."]} value={salutation} setValue={setSalutation} />
        <div className="flex max-w-72 gap-3">
            <Input crossOrigin={''} label="First Name" />
            <Input crossOrigin={''} label="Last Name"/>
        </div>
      </div>
      <div className="max-w-72">
        <Input crossOrigin={''} label="Company Name" />
      </div>
    </div>
  )
}

export default PrimaryForm
