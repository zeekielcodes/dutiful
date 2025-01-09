import Link from "next/link";
import React from "react";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-main px-4 md:px-12 lg:px-32">
      <div className="py-4 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <ul>
          <h5 className="text-white text-medium font-medium mb-4">Company</h5>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              About
            </Link>
          </li>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="/contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              FAQs
            </Link>
          </li>
        </ul>
        <ul>
          <h5 className="text-white text-medium font-medium mb-4">
            Quick links
          </h5>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              Find services
            </Link>
          </li>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              Pricing & plans
            </Link>
          </li>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              List your business
            </Link>
          </li>
        </ul>
        <ul>
          <h5 className="text-white text-medium font-medium mb-4">Resources</h5>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              Affiliate program
            </Link>
          </li>
        </ul>
        <ul>
          <h5 className="text-white text-medium font-medium mb-4">
            More from Dutiful
          </h5>
          <li>
            <Link className="text-small text-[#B6B6E5]" href="">
              Dutiful jobs
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-[#63428E]" />
      <div className="flex justify-between gap-4 md:items-center py-4 flex-col md:flex-row text-white">
        <div className="flex gap-2 md:gap-4 lg:gap-6 flex-wrap items-center">
          <p>Follow us</p>
          <Link href="">
            <FaFacebookF />
          </Link>
          <Link href="">
            <FaInstagram />
          </Link>
          <Link href="">
            <FaTwitter />
          </Link>
          <Link href="">
            <FaYoutube />
          </Link>
          <Link href="">
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex gap-2 md:gap-4 lg:gap-6 flex-wrap items-center">
          <p>Download the app</p>
          <Link href="">
            <FaApple />
          </Link>
          <Link href="">
            <IoLogoGooglePlaystore />
          </Link>
        </div>
      </div>
      <hr className="border-[#63428E]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
          <p className="text-white text-[18px]">&copy; 2022 Dutiful</p>
          <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-center">
            <Link className="text-small text-[#B6B6E5]" href="">
              Terms of Service
            </Link>
            <Link className="text-small text-[#B6B6E5]" href="">
              Privacy policy
            </Link>
            <Link className="text-small text-[#B6B6E5]" href="">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
