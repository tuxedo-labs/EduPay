import { InputProps } from "@/types/components/elements";

export const Input: React.FC<InputProps> = ({ id, value, onChange, placeholder, className }) => {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
};
