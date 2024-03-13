'use client'

import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

interface DropDownProps {
    label: string;
    options: Array<string>;
    className?: string;
    value: string | undefined;
    setValue: (value: string|undefined)=>void;
}
export default function DropDown({label, options, className, value, setValue}:DropDownProps) {
 
  return (
    <div className={className}>
      <Select
        placeholder={''}
        label={label}
        value={value}
        onChange={(val) => setValue(val)}
      >
        {
            options.map((option:string, index:number)=>(
                <Option value={option} key={index} className={`hover:!bg-primary hover:!text-white ${value===option ? "!bg-primary !text-white":""}`}>{option}</Option>
            ))
        }
      </Select>
    </div>
  );
}