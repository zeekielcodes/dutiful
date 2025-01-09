import React from "react";
import BackButton from "../back-button";
import { BiEnvelope } from "react-icons/bi";
import Button from "../button";
import Link from "next/link";

export default function ResetForm({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <form className="w-[486px]" onSubmit={() => setStep(2)}>
      <BackButton />
      <h1 className="text-big font-recoleta-alt text-[#1E1E4B]">
        Forgot password
      </h1>
      <p className="text-[#686868] font-[450] text-small mb-12">
        Enter your email and well send you a mail on how to reset your password.
      </p>
      <div className="flex flex-col gap-3 my-3">
        <label htmlFor={"email"} className="text-main text-small">
          Email
        </label>
        <div className="h-[56px] w-full flex items-center bg-[#F8FAFD] rounded border-[#E7EAF1]  border-2 px-2">
          <input
            type="email"
            name="email"
            id="email"
            className="h-full w-full bg-none bg-transparent outline-none border-none"
          />{" "}
          <BiEnvelope className="text-[#A16AE8] text-2xl" />
        </div>
      </div>

      <Button value="Send email" />
      <p className="text-small text-[#A3B1BF] text-center">
        Or{" "}
        <Link href="/login" className="text-main">
          Login
        </Link>
      </p>
    </form>
  );
}
