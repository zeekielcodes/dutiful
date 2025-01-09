"use client";

import CheckEmail from "@/components/forgot-password/check-email";
import OTP from "@/components/forgot-password/otp";
import ResetForm from "@/components/forgot-password/reset-form";
import ResetPassword from "@/components/forgot-password/reset-password";
import React, { useState } from "react";

export default function page() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-12 w-full justify-center items-center">
      {/* Form component */}
      {step === 1 ? (
        <ResetForm setStep={setStep} />
      ) : step === 2 ? (
        <CheckEmail setStep={setStep} />
      ) : step === 3 ? (
        <OTP setStep={setStep} />
      ) : step === 4 ? (
        <ResetPassword />
      ) : null}
    </div>
  );
}
