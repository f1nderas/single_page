import { ChangeEvent, FC } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-[#1e1e1e] p-5 rounded-[30px]"
    />
  );
};

export default Input;
