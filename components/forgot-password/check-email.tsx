import React from "react";
import Button from "../button";
import Image from "next/image";

export default function CheckEmail({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <form
      className="w-[486px] flex flex-col justify-center items-center gap-6"
      onSubmit={() => setStep(3)}
    >
      <div className="h-[139px] w-[139px] rounded-full bg-[#F8F3FF] flex justify-center items-center">
        <div className="relative">
          <Image src="/message.svg" height={80} width={80} alt="message" />
          <Image
            src="/email-check.svg"
            height={32}
            width={32}
            alt="check"
            className="absolute -top-2 -right-2"
          />
        </div>
      </div>
      <p className="text-[#686868] font-[450] text-small text-center">
        An OTP code has been sent to segunsolaru@gmail.com. Check your email to
        get the code
      </p>

      <Button value="Next" />
    </form>
  );
}
