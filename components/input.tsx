import React from "react";

export default function Input({
  type,
  label,
  id,
  name,
}: {
  type: "tel" | "text" | "email";
  label: string;
  id: string;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-3 my-3">
      <label htmlFor={id} className="text-main text-small">
        {label}
      </label>
      <div className="h-[56px] w-full bg-[#F8FAFD] border-2 border-[#E7EAF1] px-2">
        <input
          type={type}
          name={name}
          id={id}
          className="h-full w-full bg-none bg-transparent outline-none border-none"
        />
      </div>
    </div>
  );
}
