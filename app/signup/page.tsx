"use client";

import { FetchSignUp } from "@/Store/Reducer/SignUp/SignUpSlice";
import { AppDispatch } from "@/Store/Store";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: any) => {
    dispatch(FetchSignUp(data));
  };

  // Prevent client-only rendering issues by waiting for the component to mount
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the component after it has mounted on the client
  if (!isMounted) return null;

  return (
    <div className="w-[118pc] max-sm:w-[21pc] h-[50pc] max-sm:h-[40pc] flex flex-col gap-10 justify-center items-center">
      <div className="bg-gray-100 p-6 w-96 max-sm:w-80 shadow-xl rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Create new account</h1>
          <div>
            <Link href={"/dashboard"}>
              <FaLongArrowAltLeft size={20} className="cursor-pointer" />
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mt-5"
        >
          {/* Email field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-500 font-semibold">
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email pattern
                  message: "Please enter a valid email address",
                },
              })}
              className={`p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e2ebf] transition-colors ${
                errors.email ? "border-red-500" : "border-[#ddd]"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 font-semibold mt-1">
                {errors.email.message as string}
              </span>
            )}
          </div>

          {/* Password field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-500 font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e2ebf] transition-colors ${
                errors.password ? "border-red-500" : "border-[#ddd]"
              }`}
            />
            {errors.password && (
              <span className="text-red-500 font-semibold mt-1">
                {errors.password.message as string}
              </span>
            )}
          </div>

          {/* LinkedIn Profile field */}
          <div className="flex flex-col">
            <label
              htmlFor="linkedinUrl"
              className="text-gray-500 font-semibold"
            >
              LinkedIn Profile
            </label>
            <input
              id="linkedinUrl"
              type="text"
              {...register("linkedinUrl", {
                required: "LinkedIn URL is required",
                pattern: {
                  value:
                    /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/, // LinkedIn URL pattern
                  message: "Please enter a valid LinkedIn profile URL",
                },
              })}
              className={`p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e2ebf] transition-colors ${
                errors.linkedinUrl ? "border-red-500" : "border-[#ddd]"
              }`}
            />
            {errors.linkedinUrl && (
              <span className="text-red-500 font-semibold mt-1">
                {errors.linkedinUrl.message as string}
              </span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#2e2ebf] p-3 rounded-xl text-white font-bold text-lg ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#1d1dbf]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>

      {/* SignIn link */}
      <p>
        Already have an account?{" "}
        <Link href="/login">
          <span className="text-[#2e2ebf] hover:underline cursor-pointer">
            Sign In
          </span>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
