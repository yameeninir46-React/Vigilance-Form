import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useVigilanceForm, type VigilanceFormData } from "@/context/VigilanceFormContext";

interface BaseProps {
  name: keyof VigilanceFormData;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const TextField = ({ name, label, placeholder, disabled, className }: BaseProps) => {
  const { formData, updateField } = useVigilanceForm();
  return (
    <div className={`space-y-2 ${className || ""}`}>
      <Label>{label}</Label>
      <Input
        value={formData[name]}
        onChange={(e) => updateField(name, e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={disabled ? "bg-muted text-muted-foreground cursor-not-allowed" : ""}
      />
    </div>
  );
};

export const TextAreaField = ({ name, label, placeholder, className }: BaseProps) => {
  const { formData, updateField } = useVigilanceForm();
  return (
    <div className={`space-y-2 ${className || ""}`}>
      <Label>{label}</Label>
      <Textarea
        value={formData[name]}
        onChange={(e) => updateField(name, e.target.value)}
        placeholder={placeholder}
        rows={3}
      />
    </div>
  );
};

interface SelectFieldProps extends BaseProps {
  options: { value: string; label: string }[];
}

export const SelectField = ({ name, label, options, placeholder, className }: SelectFieldProps) => {
  const { formData, updateField } = useVigilanceForm();
  return (
    <div className={`space-y-2 ${className || ""}`}>
      <Label>{label}</Label>
      <Select value={formData[name]} onValueChange={(v) => updateField(name, v)}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder || "Select..."} />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

interface RadioFieldProps extends BaseProps {
  options: { value: string; label: string }[];
}

export const RadioField = ({ name, label, options, className }: RadioFieldProps) => {
  const { formData, updateField } = useVigilanceForm();
  return (
    <div className={`space-y-2 ${className || ""}`}>
      <Label>{label}</Label>
      <RadioGroup value={formData[name]} onValueChange={(v) => updateField(name, v)} className="flex gap-6 pt-1">
        {options.map((o) => (
          <div key={o.value} className="flex items-center gap-2">
            <RadioGroupItem value={o.value} id={`${name}-${o.value}`} />
            <Label htmlFor={`${name}-${o.value}`} className="cursor-pointer">{o.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export const DateField = ({ name, label, className }: BaseProps) => {
  const { formData, updateField } = useVigilanceForm();

  // display as dd/mm/yyyy
  const displayValue = formData[name]
    ? formData[name].includes("-")
      ? formData[name].split("-").reverse().join("/")
      : formData[name]
    : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // yyyy-mm-dd from browser
    const formatted = value.split("-").reverse().join("/"); // dd/mm/yyyy
    updateField(name, formatted);
  };

  return (
    <div className={`space-y-2 ${className || ""}`}>
      <Label>{label}</Label>
      <Input
        type="date"
        value={displayValue}
        onChange={handleChange}
      />
    </div>
  );
};