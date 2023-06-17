"use client";

import { AiFillGithub } from "react-icons/ai";
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
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  githubProvider,
  googleProvider,
} from "@/firebase/firebase.config";
import { setUser } from "@/context/slice/authSlice";
import { toast } from "react-toastify";
import {toastOptions} from "@/app/utils/toastOptions"
import {toastType} from "@/app/types"

type initialValues = {
  email: string;
  password: string;
};

const initialValues: initialValues = {
  email: "",
  password: "",
};

export default function LoginModal() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useAppSelector((store) => store.loginModal.isOpen);
  const { errors, handleChange, handleBlur, handleSubmit, values, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit(
        values: initialValues,
        formikHelpers: FormikHelpers<initialValues>
      ) {
        console.log(values);
        formikHelpers.resetForm();
      },
    });

  function onCloseHandler(): void {
    dispatch(onCloseLoginModal());
  }

  function openRegisterModalHandler(): void {
    dispatch(onCloseLoginModal());
    dispatch(setOpenRegisterModal());
  }

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        const user = {
          access_token: data.user.refreshToken,
          id: data.user.uid,
          fullName: data.user.displayName,
          email: data.user.email,
          photoURL: data.user.photoURL,
        };
        dispatch(setUser(user));
      })
      .then(() => toast.success("LoggedIn Successfully"))
      .then(() => dispatch(onCloseLoginModal()))
      .catch((err) => toast.error(err.message));
  };

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(() => toast.success("LoggedIn Successfully"))
      .then(() => dispatch(onCloseLoginModal()))
      .catch((err) => console.log(err.message));
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back!!" subtitle="Login with your credintials" />
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
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
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={githubLogin}
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
      disabled={false}
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
