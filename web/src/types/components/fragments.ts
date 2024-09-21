export interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required: boolean;
  type?:
    | "button"
    | "submit"
    | "reset"
    | "text"
    | "password"
    | "email"
    | "url"
    | "tel"
    | "number"
    | "range"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color"
    | "file"
    | "hidden"
    | "checkbox"
    | "radio";
}
