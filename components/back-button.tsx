"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="h-[32px] w-[32px] rounded-full shadow flex justify-center items-center mb-8"
    >
      <IoIosArrowRoundBack className="text-[#A16AE8] text-2xl" />
    </button>
  );
}
