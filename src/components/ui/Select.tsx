import { ChevronDown } from "lucide-react";
import { FC, SelectHTMLAttributes } from "react";

export interface IOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IOption[];
}

const Select: FC<SelectProps> = ({ options, ...props }) => {
  return (
    <div
      className="flex-1"
      style={{ position: "relative", display: "inline-block" }}
    >
      <select
        {...props}
        style={{
          appearance: "none",
          padding: "14px 20px 14px 40px",
          paddingRight: "40px",
          border: "1px solid #ccc",
          borderRadius: "30px",
          backgroundColor: "#444",
          fontSize: "16px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
        size={20}
      />
    </div>
  );
};

export { Select };
