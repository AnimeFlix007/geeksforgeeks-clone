"use client";

import { setLoginModalOpen } from "@/context/slice/LoginModalSlice";
import { logOut } from "@/context/slice/authSlice";
import { AppDispatch, useAppSelector } from "@/context/store";
import { auth } from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {} from "react";

type Props = {};

export default function Navbar({}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((store) => store.auth.user);
  const [showAvatar, setShowAvatar] = useState<boolean>(false);
  const [showMenuItems, setShowMenuItems] = useState<boolean>(true);
  function showLoginModal() {
    dispatch(setLoginModalOpen());
  }
  function logOutHandler() {
    signOut(auth).then(() => dispatch(logOut()));
  }
  return (
    <nav className="bg-green-100 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="flex items-center">
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
        </p>
        <div className="flex items-center md:order-2">
          {user ? (
            <Image
              onClick={() => setShowAvatar((prev: boolean) => !prev)}
              className="w-8 h-8 rounded-full"
              src={user.photoURL || "/images/Avatar.avif"}
              alt="user photo"
              height={32}
              width={32}
            />
          ) : (
            <button
              onClick={showLoginModal}
              type="button"
              className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Login
            </button>
          )}

          {(showAvatar && user) && (
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
                    {user?.fullName}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
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
                      Fav List
                    </a>
                  </li>
                  <li onClick={logOutHandler}>
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
      </div>
    </nav>
  );
}
