import React from "react";
import PasswordInput from "../password-input";
import Button from "../button";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <form className="w-[486px]">
      <h1 className="text-big font-recoleta-alt text-[#1E1E4B]">
        Reset password
      </h1>
      <p className="text-[#686868] font-[450] text-small mb-12">
        Set your new password
      </p>
      <PasswordInput id="password" label="Enter new password" name="password" />
      <PasswordInput
        id="password"
        label="Re-enter new password"
        name="password"
      />

      <Button value="Reset password" />
      <p className="text-small text-[#A3B1BF] text-center">
        or{" "}
        <Link href="/signup" className="text-main">
          Create new account
        </Link>
      </p>
    </form>
  );
}
