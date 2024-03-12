import { Input } from "./input";

export function LabelInput({
  name,
  placeHolder,
  type,
  autoComplete,
  value,
  setValue,
}: {
  name: string;
  placeHolder: string;
  type: string;
  autoComplete: string;
  value: any;
  setValue: (newValue: any) => void;
}) {
  return (
    <div className="mt-6 w-11/12 rounded-md shadow-sm -space-y-px">
      <span className="text-slate-700">{name}</span>
      <div>
        <Input
          placeHolder={placeHolder}
          type={type}
          autoComplete={autoComplete}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
