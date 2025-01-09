"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Nav() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleNav = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <header className="py-4 px-4 md:px-8">
      <nav className="relative flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            height={50}
            width={120}
            className="object-contain h-[40px] w-auto md:w-[120px] md:h-auto"
            alt="Dutiful"
          />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger border flex items-center text-main p-3"
            onClick={toggleNav}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex gap-4 md:gap-6 lg:gap-8">
          <ul className="flex gap-4 md:gap-6 lg:gap-8 items-center text-[#686868] text-[18px]">
            <li>
              <CiSearch className="text-2xl text-[#603F8B]" />
            </li>
            <li>
              <Link href="">Business Directory</Link>
            </li>
            <li>
              <Link href="/pricing#features">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
          </ul>
          <div className="flex gap-4 md:gap-6 lg:gap-8  items-center text-base">
            <Link href="/login" className="text-[#1E1E4B] px-6 py-2">
              Log in
            </Link>
            <Link
              href="/signup"
              className="border-2 text-[#603F8B] rounded px-6 py-2 border-[#603F8B]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
      <div className={`navbar-menu relative z-50 ${!showMenu && "hidden"}`}>
        <div
          className={`navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 ${
            !showMenu && "hidden"
          }`}
          onClick={toggleNav}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link href="/" className="mr-auto text-3xl font-bold leading-none">
              <Image
                src="/logo.png"
                height={40}
                width={70}
                className="object-contain h-14"
                alt="Dutiful"
              />
            </Link>

            <button className="navbar-close" onClick={toggleNav}>
              <svg
                className="h-6 w-6 text-black cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-[#686868] hover:bg-blue-50 hover:text-main rounded"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-[#686868] hover:bg-blue-50 hover:text-main rounded"
                  href="/"
                >
                  Business Directory
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-[#686868] hover:bg-blue-50 hover:text-main rounded"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-[#686868] hover:bg-blue-50 hover:text-main rounded"
                  href="/pricing#features"
                >
                  Features
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-[#686868] hover:bg-blue-50 hover:text-main rounded"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-[#686868] hover:bg-blue-50 hover:text-main rounded"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center bg-main text-white hover:bg-white hover:text-main font-semibol border border-main  rounded-xl"
                href="/login"
              >
                Log in
              </Link>
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-main hover:bg-main hover:text-white font-semibold bg-transparent border border-main  rounded-xl"
                href="/signup"
              >
                Sign up
              </Link>
            </div>

            <p className="my-4 text-xs text-center text-black">
              <span>Copyright © {new Date().getFullYear()}</span>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
