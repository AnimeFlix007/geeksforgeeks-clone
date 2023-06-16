"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [showAvatar, setShowAvatar] = useState<boolean>(false);
  const [showMenuItems, setShowMenuItems] = useState<boolean>(true);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src="/images/gfglogo.jpg"
            className="h-8 mr-3 rounded-full"
            alt="GFG"
            height={32}
            width={32}
          />
          <span className="self-center text-2xl text-slate-700 font-semibold whitespace-nowrap dark:text-white">
            GeeksForGeeks
          </span>
        </a>
        <div className="flex items-center md:order-2">
         {<button
            type="button"
            className="flex mr-3 text-sm rounded-full md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => setShowAvatar((prev: boolean) => !prev)}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full"
              src="/images/Avatar.avif"
              alt="user photo"
              height={32}
              width={32}
            />
          </button>}

          {showAvatar && (
            <div
              className="fixed w-full h-full top-0 left-0"
              onClick={() => setShowAvatar(false)}
            >
              <div
                className="absolute top-12 right-8 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  e.stopPropagation()
                }
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setShowMenuItems((prev: boolean) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {showMenuItems && (
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Advance Javascript
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Interview Questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Latest Blogs
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
