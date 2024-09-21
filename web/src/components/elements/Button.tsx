import { ButtonProps } from "@/types/components/elements"
import React from "react"

export const Button: React.FC<ButtonProps> = ({ children, className, type, onClick }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
