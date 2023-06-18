/* eslint-disable react/no-unescaped-entities */
"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FormikHelpers, useFormik } from "formik";

import Modal from "../Modal";
import Input from "../Input";
import Heading from "../Heading";
import Button from "../Button";
import { registerSchema } from "@/app/schema/RegisterSchema";
import { onCloseRegisterModal } from "@/context/slice/RegisterModalSlice";
import { AppDispatch, useAppSelector } from "@/context/store";
import { useDispatch } from "react-redux";
import { setLoginModalOpen } from "@/context/slice/LoginModalSlice";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { setUser } from "@/context/slice/authSlice";
import { useState } from "react";

type initialValues = {
  username: string;
  email: string;
  password: string;
};

const initialValues: initialValues = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterModal() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useAppSelector((store) => store.registerModal.isOpen);
  const { errors, handleChange, handleBlur, handleSubmit, values, touched } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      async onSubmit(
        values: initialValues,
        formikHelpers: FormikHelpers<initialValues>
      ) {
        setLoading((prev) => !prev);
        try {
          const auth: Auth = getAuth();
          const data = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          await updateProfile(data.user, {
            displayName: values.username,
          });
          const user = {
            access_token: data.user.refreshToken,
            id: data.user.uid,
            fullName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL,
          };
          dispatch(setUser(user));
          formikHelpers.resetForm();
          dispatch(onCloseRegisterModal());
          toast.success("Registration Success");
        } catch (error: any) {
          toast.error(error.message);
        } finally {
          setLoading((prev) => !prev);
        }
      },
    });

  function onCloseHandler(): void {
    dispatch(onCloseRegisterModal());
  }
  function openLoginModalHandler(): void {
    dispatch(onCloseRegisterModal());
    dispatch(setLoginModalOpen());
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to GeeksForGeeks!!"
        subtitle="SignUp to submit your code"
      />
      <Input
        id="username"
        name="username"
        label="Username"
        type="text"
        disabled={loading}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.username}
        touched={touched.username}
        value={values.username}
      />
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
        disabled={loading}
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
        disabled={loading}
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
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
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
          Don't have an account?
          <span
            onClick={openLoginModalHandler}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Sign In
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={onCloseHandler}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
