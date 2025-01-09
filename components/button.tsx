"use client";

import React from "react";

export default function Button({ value }: { value: string }) {
  return (
    <button className="bg-[#532F82] h-[76px] w-full text-white text-[18px] rounded shadow-xl my-6">
      {value}
    </button>
  );
}
