"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const handleClick = () => {
    // setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-6">
      <Link href="/" className="flex items-center justify-center h-20">
        <Image
          src="/images/gfg.jpg"
          alt="GeeksForGeeks"
          height={100}
          width={100}
          className="rounded-full"
        />
      </Link>
      <nav>
        <ul className="flex items-center justify-between gap-6">
          <Link
            href={"/javascript"}
            className=" cursor-pointer hover:underline"
          >
            Advance Javascript
          </Link>
          <Link href={"/interview"} className=" cursor-pointer hover:underline">
            Interview Questions
          </Link>
          <Link href={"/blogs"} className=" cursor-pointer hover:underline">
            Recent Blogs
          </Link>
        </ul>
      </nav>
      <div className="flex items-center justify-between  flex-row">
        <button
          className="bg-green-600 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-green-500 hover:border-2  border-2 border-transparent
                transition duration-300 ease-in-out mr-3
                "
          onClick={handleClick}
        >
          Log In
        </button>
        <button
          className="bg-green-600 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange  hover:bg-green-500 hover:border-2 border-2 border-transparent
                transition duration-300 ease-in-out
                "
          onClick={handleClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
