import { ButtonTypes } from "@/types/components/elements"

export const Button = ({ children, className, type, onClick }: ButtonTypes) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
