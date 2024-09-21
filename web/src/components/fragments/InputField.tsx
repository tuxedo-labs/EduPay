import React from "react";
import { Label } from "../elements/Label";
import { Input } from "../elements/Input";
import { InputFieldProps } from "@/types/components/elements";

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder, id }) => {
  return (
    <div className="input-field">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};
