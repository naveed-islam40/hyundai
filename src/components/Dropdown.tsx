import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "./ui/label";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
  label?: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Select...",
  className = "",
  label,
}: CustomSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <div className="flex flex-col gap-1">
        <div>
          <Label className="mb-1">{label}</Label>
          <SelectTrigger
            className={className}
            style={!value ? { color: "#E48096" } : {}}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <div className="text-xs text-gray-500 italic">*Required field</div>
        </div>
      </div>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
