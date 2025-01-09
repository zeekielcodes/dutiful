import Input from "@/components/input";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/button";

export default function page() {
  return (
    <div>
      <div className="h-[250px] bg-[url('/banner-bg.svg')] bg-main text-white px-4 md:px-8 lg:px-20 flex justify-center py-8 lg:py-12">
        <div className="max-w-[888px] text-center">
          <h1 className="font-recoleta-alt text-[30px] lg:text-[36px]">
            Get in touch
          </h1>
          <p className="text-small md:text-base">
            We are here to support you throughout the process of getting your
            business listed.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 md:px-8 lg:px-12 -translate-y-16 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <div className="bg-white rounded-xl shadow-sm px-4 py-6 w-full flex flex-col gap-3 items-center justify-center text-center">
          <div className="flex gap-4 items-center">
            <Image
              src="/sms-tracking.svg"
              height={48}
              width={48}
              alt="message"
            />
            <p className="text-[#1E1E4B] text-[20px] md:text-[24px]">
              Customer support
            </p>
          </div>
          <p className="text-small md:text-[18px] font-[450] text-[#656565]">
            Please fill out the form below
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm px-4 py-6 w-full flex flex-col gap-3 items-center justify-center text-center">
          <div className="flex gap-4 items-center">
            <Image src="/map.svg" height={48} width={48} alt="message" />
            <p className="text-[#1E1E4B] text-[20px] md:text-[24px]">
              Business address
            </p>
          </div>
          <p className="text-small md:text-[18px] font-[450] text-[#656565]">
            Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001,
            Lagos, Nigeria
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm px-4 py-6 w-full flex flex-col gap-3 items-center justify-center text-center">
          <div className="flex gap-4 items-center">
            <Image src="/call.svg" height={48} width={48} alt="message" />
            <p className="text-[#1E1E4B] text-[20px] md:text-[24px]">
              Phone number
            </p>
          </div>
          <p className="text-small md:text-[18px] font-[450] text-[#656565]">
            +234 903 921 6724
          </p>
        </div>
      </div>
      <div className="flex px-4 md:px-8 pb-4 md:pb-8 lg:pb-12 xl:pb-20 w-full justify-center items-center">
        <form action="" className="w-full md:w-[486px]">
          <Input id="fname" label="Full name" name="fname" type="text" />
          <Input id="email" label="Email" name="email" type="email" />
          <Input
            id="businessType"
            label="Business type (Optional)"
            name="businessType"
            type="text"
          />
          <div className="flex flex-col gap-3 my-3">
            <label htmlFor={"subject"} className="text-main text-small">
              Subject
            </label>
            <div className="h-[56px] w-full bg-[#F8FAFD] border-2 border-[#E7EAF1]">
              <Select>
                <SelectTrigger className="w-full h-full border-none outline-none">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="subject1">Subject 1</SelectItem>
                    <SelectItem value="subject2">Subject 2</SelectItem>
                    <SelectItem value="subject3">Subject 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-3 my-3">
            <label htmlFor={"message"} className="text-main text-small">
              Write your message
            </label>
            <div className="h-[131px] w-full bg-[#F8FAFD] border-2 border-[#E7EAF1]">
              <textarea
                name="message"
                id="message"
                className="h-full w-full resize-none bg-none bg-transparent border-none outline-none"
              ></textarea>
            </div>
          </div>
          <Button value="Send message" />
        </form>
      </div>
    </div>
  );
}
