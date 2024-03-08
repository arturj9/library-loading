
export function Input({ placeHolder, type, autoComplete, value, setValue }: {
  placeHolder: string,
  type: string,
  autoComplete: string,
  value: string,
  setValue: (newValue:string) => void
}) {
  return (
      <input
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-slate-400 placeholder-slate-600 text-slate-900 focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
        placeholder={placeHolder}
      />
  );
}
