import Button from "@/components/button";
import Input from "@/components/input";
import PasswordInput from "@/components/password-input";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-12 w-full justify-center items-center">
      {/* Form component */}
      <form className="w-[486px]">
        <p className="text-[#686868] font-[450] text-small">
          Jump right back in
        </p>
        <h1 className="text-big font-recoleta-alt text-[#1E1E4B] mb-12">
          Login
        </h1>
        <Input id="email" label="Email" name="email" type="email" />
        <PasswordInput id="password" label="Password" name="password" />
        <p className="text-right">
          <Link href="/forgot-password" className="text-[14px] text-[#A16AE8]">
            Forgot password?
          </Link>
        </p>
        <Button value="Login" />
        <p className="text-small text-[#A3B1BF] text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-main">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
