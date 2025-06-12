import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { useState } from "react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
  label?: string;
  isDisabled?: boolean;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Select...",
  className = "",
  label,
  isDisabled = false,
}: CustomSelectProps) {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <Label className="mb-1">{label}</Label>}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          disabled={isDisabled}
          className={className}
          style={!value ? { color: "#E48096" } : {}}
          onBlur={handleBlur}
        >
          {isDisabled && value ? (
            <span className="text-[#E7000B]">{value}</span>
          ) : (
            <SelectValue placeholder={placeholder} />
          )}
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {touched && !value && (
        <div className="text-xs text-gray-600 italic mt-0"></div>
      )}
    </div>
  );
}
