import { LabelProps } from "@/types/components/elements";

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
