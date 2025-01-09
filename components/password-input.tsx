"use client";

import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordInput({
  label,
  id,
  name,
}: {
  label: string;
  id: string;
  name: string;
}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="flex flex-col gap-3 my-3">
      <label htmlFor={id} className="text-main text-small">
        {label}
      </label>
      <div className="h-[56px] w-full flex items-center bg-[#F8FAFD] border-2 border-[#E7EAF1] px-2">
        <input
          type={visiblePassword ? "text" : "password"}
          name={name}
          id={id}
          className="h-full w-full bg-none bg-transparent outline-none border-none"
        />{" "}
        <button
          type="button"
          onClick={() => setVisiblePassword(!visiblePassword)}
        >
          {!visiblePassword ? (
            <FiEye className="text-[#A16AE8] text-2xl" />
          ) : (
            <FiEyeOff className="text-[#A16AE8] text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
}
