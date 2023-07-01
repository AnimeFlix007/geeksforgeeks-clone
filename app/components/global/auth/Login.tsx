"use client";

import { FcGoogle } from "react-icons/fc";
import { FormikHelpers, useFormik } from "formik";

import Modal from "../Modal";
import Input from "../Input";
import Heading from "../Heading";
import Button from "../Button";
import { loginSchema } from "@/app/schema/LoginSchema";
import { AppDispatch, useAppSelector } from "@/context/store";
import { useDispatch } from "react-redux";
import { onCloseLoginModal } from "@/context/slice/LoginModalSlice";
import { setOpenRegisterModal } from "@/context/slice/RegisterModalSlice";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import {
  auth,
  db,
  googleProvider,
} from "@/firebase/firebase.config";
import { setUser } from "@/context/slice/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { DocumentData, doc, getDoc, setDoc } from "firebase/firestore";

type initialValues = {
  email: string;
  password: string;
};

const initialValues: initialValues = {
  email: "",
  password: "",
};

export default function LoginModal() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useAppSelector((store) => store.loginModal.isOpen);
  const { errors, handleChange, handleBlur, handleSubmit, values, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      async onSubmit(
        values: initialValues,
        formikHelpers: FormikHelpers<initialValues>
      ) {
        setLoading((prev) => !prev);
        try {
          const data: UserCredential = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          const user = {
            access_token: data.user.refreshToken,
            id: data.user.uid,
            fullName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL,
          };

          const docRef = doc(db, "users", user.id);
          const docSnap = await getDoc(docRef);
          if (!docSnap.exists()) {
            await setDoc(doc(db, "users", user.id), {
              ...user,
              likedProblems: [],
              dislikeProblems: [],
              solvedProblems: [],
              favProblems: [],
            });
          }
          const docVal: DocumentData | undefined = docSnap.data()
          dispatch(setUser(docVal));
          dispatch(onCloseLoginModal());
          toast.success("signed in successfully!!");
          formikHelpers.resetForm();
        } catch (error: any) {
          toast.error(error.message);
        } finally {
          setLoading((prev) => !prev);
        }
      },
    });

  function onCloseHandler(): void {
    dispatch(onCloseLoginModal());
  }

  function openRegisterModalHandler(): void {
    dispatch(onCloseLoginModal());
    dispatch(setOpenRegisterModal());
  }

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      const user = {
        access_token: data.user.refreshToken,
        id: data.user.uid,
        fullName: data.user.displayName,
        email: data.user.email,
        photoURL: data.user.photoURL,
      };
  
      toast.success("LoggedIn Successfully");
      dispatch(onCloseLoginModal());
  
      const docRef = doc(db, "users", user.id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.id), {
          ...user,
          likedProblems: [],
          dislikeProblems: [],
          solvedProblems: [],
          favProblems: [],
        });
      }
      dispatch(setUser(docSnap.data()));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back!!" subtitle="Login with your credintials" />
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        disabled={loading}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
        value={values.email}
      />
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        disabled={loading}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
        value={values.password}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={googleLogin}
      />
      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>
          Dont have an account?
          <span
            onClick={openRegisterModalHandler}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Sign up
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={onCloseHandler}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
