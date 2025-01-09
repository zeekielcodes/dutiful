"use client";

import React from "react";
import Button from "../button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OTP({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <form
      className="w-[486px] flex flex-col justify-center items-center gap-6"
      onSubmit={() => setStep(4)}
    >
      <div>
        <InputOTP maxLength={4} className="">
          <InputOTPGroup className="gap-4">
            <InputOTPSlot
              className="h-[75px] w-[75px] text-2xl bg-[#F3F3F3] border-2 border-[#B6B6E5] rounded-md"
              index={0}
            />
            <InputOTPSlot
              className="h-[75px] w-[75px] text-2xl bg-[#F3F3F3] border-2 border-[#B6B6E5] rounded-md"
              index={1}
            />
            <InputOTPSlot
              className="h-[75px] w-[75px] text-2xl bg-[#F3F3F3] border-2 border-[#B6B6E5] rounded-md"
              index={2}
            />
            <InputOTPSlot
              className="h-[75px] w-[75px] text-2xl bg-[#F3F3F3] border-2 border-[#B6B6E5] rounded-md"
              index={3}
            />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <p className="text-[#686868] font-[450] text-small text-center">
        Enter OTP code that was sent to your email, segunsolaru@gmail.com.
      </p>

      <Button value="Confirm OTP" />
      <p className="text-small text-[#A3B1BF] text-center">
        Didn't get a code?{" "}
        <button type="button" onClick={() => setStep(2)} className="text-main">
          Resend
        </button>
      </p>
    </form>
  );
}
