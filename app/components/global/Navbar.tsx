"use client";

import { setLoginModalOpen } from "@/context/slice/LoginModalSlice";
import { logOut } from "@/context/slice/authSlice";
import { AppDispatch, useAppSelector } from "@/context/store";
import { auth } from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Timer from "../Timer";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((store) => store.auth.user);
  const [showAvatar, setShowAvatar] = useState<boolean>(false);
  function showLoginModal() {
    dispatch(setLoginModalOpen());
  }
  function logOutHandler() {
    signOut(auth)
      .then(() => dispatch(logOut()))
      .then(() => toast.success("Logged out Successfully"));
  }

  return (
    <nav className="bg-green-100 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          className="flex items-center cursor-pointer"
          href={"/"}
        >
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
        </Link>
        <div className="flex items-center md:order-2">
          <div className=" px-4">
            <Timer />
          </div>
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

          {showAvatar && user && (
            <div
              className="fixed w-full h-full top-0 left-0"
              onClick={() => setShowAvatar(false)}
            >
              <div
                className="absolute top-12 right-8 z-100 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
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
                <ul
                  className="py-2 bg-white"
                  aria-labelledby="user-menu-button"
                >
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
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Reset Password
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
        </div>
      </div>
    </nav>
  );
}
