import React from "react";

export function Input({ placeHolder }: { placeHolder: string }) {
  return (
    <div className="p-1">
      <input
        type="text"
        placeholder={placeHolder}
        className="bg-slate-500 rounded-sm"
      />
    </div>
  );
}
