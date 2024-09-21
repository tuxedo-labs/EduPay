import { InputProps } from "@/types/components/elements";

export const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  id,
  value,
  onChange,
  placeholder,
  className,
  required,
  type,
  ...rest
}) => {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
      required={required}
      type={type}
      {...rest}
    />
  );
};

