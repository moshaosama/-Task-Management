"use client";

import { FetchSignUp } from "@/Store/Reducer/SignUp/SignUpSlice";
import { AppDispatch } from "@/Store/Store";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

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

  return (
    <div className="w-[118pc] max-sm:w-[21pc] h-[50pc] max-sm:h-[40pc] flex flex-col gap-10 justify-center items-center">
      <div className="bg-gray-100 p-3 w-96 max-sm:w-80 shadow-xl rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">Create new account</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-5"
        >
          <p className="flex flex-col">
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register("email", {
                required: "email is Required",
              })}
              className="p-2 border-[#ddd] border-[2px] rounded-lg"
            />
            <span className="text-red-500 font-semibold">
              {errors.email?.message && (errors.email?.message as string)}
            </span>
          </p>
          <p className="flex flex-col">
            <label htmlFor="password" className="text-gray-500">
              Password
            </label>
            <input
              id="password"
              type="text"
              {...register("password", {
                required: "password is Required",
              })}
              className="p-2 border-[#ddd] border-[2px] rounded-lg"
            />
            <span className="text-red-500 font-semibold">
              {errors.password?.message && (errors.password?.message as string)}
            </span>
          </p>
          <p className="flex flex-col">
            <label htmlFor="linkedinUrl" className="text-gray-500">
              Linkedin Profile
            </label>
            <input
              id="linkedinUrl"
              type="text"
              {...register("linkedinUrl", {
                required: "linkedinUrl is Required",
              })}
              className="p-2 border-[#ddd] border-[2px] rounded-lg"
            />
            <span className="text-red-500 font-semibold">
              {errors.linkedinUrl?.message &&
                (errors.linkedinUrl?.message as string)}
            </span>
          </p>

          <button className="bg-[#2e2ebf] p-3 rounded-xl text-white font-bold text-lg">
            Login
          </button>
        </form>
      </div>
      <p>
        Already have an account?
        <Link href={"/login"}>
          <span className="text-[#2e2ebf] hover:underline cursor-pointer">
            {"  "}Signin
          </span>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
