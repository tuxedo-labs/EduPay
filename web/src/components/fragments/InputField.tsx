import React from "react";
import { Label } from "../elements/Label";
import { Input } from "../elements/Input";
import { InputFieldProps } from "@/types/components/fragments";

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder, required, type }) => {
  return (
    <div className="input-field">
      <Label htmlFor={value}>{label}</Label>
      <br />
      <div className="flex justify-center items-center">
        <Input required={required} value={value} onChange={onChange} placeholder={placeholder} className="border border-gray-300 p-2 rounded shadow w-full" type={type} />
      </div>
    </div>
  );
};
