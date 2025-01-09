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
          Sign up for free!
        </p>
        <h1 className="text-big font-recoleta-alt text-[#1E1E4B] mb-12">
          Get started
        </h1>
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
          <input type="radio" name="type" id="user" className="hidden" />
          <label htmlFor="user">
            <div className="flex gap-4 items-center text-[#B1BDCA] relative border rounded-md p-4">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.57906"
                  cy="5.77803"
                  r="4.77803"
                  stroke="#B1BDCA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5338 1.2197 16.2312C1.67736 15.3158 2.96798 14.8307 4.03892 14.611C4.81128 14.4462 5.59431 14.3361 6.38217 14.2815C7.84084 14.1534 9.30793 14.1534 10.7666 14.2815C11.5544 14.3367 12.3374 14.4468 13.1099 14.611C14.1808 14.8307 15.4714 15.2701 15.9291 16.2312C16.2224 16.848 16.2224 17.564 15.9291 18.1808C15.4714 19.1419 14.1808 19.5813 13.1099 19.7918C12.3384 19.9635 11.5551 20.0767 10.7666 20.1305C9.57937 20.2311 8.38659 20.2495 7.19681 20.1854C6.92221 20.1854 6.65677 20.1854 6.38217 20.1305C5.59663 20.0773 4.81632 19.9641 4.04807 19.7918C2.96798 19.5813 1.68652 19.1419 1.2197 18.1808C1.0746 17.8747 0.999552 17.5402 1.00002 17.2014Z"
                  stroke="#B1BDCA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="">Regular User</p>
            </div>
          </label>
          <input type="radio" name="type" id="provider" className="hidden" />
          <label htmlFor="provider">
            <div className="flex provider gap-4 items-center text-[#B1BDCA] relative border rounded-md p-4">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1269)">
                  <path
                    d="M18.6667 20.5H10.6667V15.1666H9.33333V20.5H5.33333V15.1666H4V20.5C4 20.8536 4.14048 21.1927 4.39052 21.4428C4.64057 21.6928 4.97971 21.8333 5.33333 21.8333H18.6667C19.0203 21.8333 19.3594 21.6928 19.6095 21.4428C19.8595 21.1927 20 20.8536 20 20.5V15.1666H18.6667V20.5Z"
                    fill="#B1BDCA"
                  />
                  <path
                    d="M22.5268 9.34663L19.8068 3.90663C19.6965 3.68448 19.5263 3.49754 19.3155 3.36681C19.1047 3.23608 18.8616 3.16676 18.6135 3.16663H5.38684C5.13878 3.16676 4.89568 3.23608 4.68487 3.36681C4.47406 3.49754 4.30389 3.68448 4.19351 3.90663L1.47351 9.34663C1.38064 9.53295 1.33269 9.73844 1.33351 9.94663V12C1.3329 12.3115 1.4414 12.6134 1.64017 12.8533C1.93395 13.19 2.29677 13.4596 2.70399 13.6437C3.11122 13.8277 3.55329 13.922 4.00017 13.92C4.72935 13.9211 5.43629 13.669 6.00017 13.2066C6.56405 13.6692 7.27083 13.922 8.00017 13.922C8.72951 13.922 9.4363 13.6692 10.0002 13.2066C10.564 13.6692 11.2708 13.922 12.0002 13.922C12.7295 13.922 13.4363 13.6692 14.0002 13.2066C14.564 13.6692 15.2708 13.922 16.0002 13.922C16.7295 13.922 17.4363 13.6692 18.0002 13.2066C18.6296 13.7234 19.4349 13.9761 20.2468 13.9114C21.0586 13.8468 21.8138 13.4699 22.3535 12.86C22.5547 12.621 22.6656 12.319 22.6668 12.0066V9.94663C22.6677 9.73844 22.6197 9.53295 22.5268 9.34663ZM10.0002 10.1V11.1133L9.45351 11.8333C9.28569 12.062 9.06637 12.248 8.8133 12.3762C8.56023 12.5044 8.28053 12.5712 7.99684 12.5712C7.71315 12.5712 7.43345 12.5044 7.18038 12.3762C6.92731 12.248 6.70799 12.062 6.54017 11.8333L6.00017 11.0866V10.1L7.72684 4.49996H10.6668L10.0002 10.1ZM18.0002 11.0866L17.4602 11.8333C17.2924 12.062 17.073 12.248 16.82 12.3762C16.5669 12.5044 16.2872 12.5712 16.0035 12.5712C15.7198 12.5712 15.4401 12.5044 15.187 12.3762C14.934 12.248 14.7147 12.062 14.5468 11.8333L14.0002 11.0866V10.1L13.3335 4.49996H16.3002L18.0002 10.1V11.0866Z"
                    fill="#B1BDCA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1269">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="">Service provider</p>
            </div>
          </label>
        </div>
        <Input id="fname" label="Full name" name="fname" type="text" />
        <Input id="email" label="Email" name="email" type="email" />
        <Input id="phone" label="Phone number" name="phone" type="tel" />
        <PasswordInput id="password" label="Password" name="password" />
        <PasswordInput
          id="cpassword"
          label="Re-enter password"
          name="cpassword"
        />
        <div className="flex gap-2 text-[14px] text-[#3F3F3F]">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="accent-[A16AE8]"
          />
          <label htmlFor="terms">
            I agree to Dutiful's{" "}
            <Link href="" className="text-[#A16AE8] underline">
              terms and conditions
            </Link>
          </label>
        </div>

        <Button value="Sign up" />
        <p className="text-small text-[#A3B1BF] text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-main">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
