import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export interface InputProps {
  id?: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required: boolean;
}
