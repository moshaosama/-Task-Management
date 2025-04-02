"use client";
import { FetchLogin } from "@/Store/Reducer/Login/LoginSlice";
import { AppDispatch } from "@/Store/Store";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: any) => {
    dispatch(FetchLogin(data));
  };

  return (
    <div className="w-[118pc] h-[50pc] max-sm:w-[21pc] flex flex-col max-sm:h-[40pc] gap-10 justify-center items-center">
      <div className="bg-gray-100 p-6 w-96 max-sm:w-80 shadow-xl rounded-lg">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-400">
              Stay Updated on Your professional world
            </p>
          </div>
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
                required: "Email is required", // Custom error message
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email pattern
                  message: "Please enter a valid email",
                },
              })}
              className={`p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e2ebf] transition-colors ${
                errors.email ? "border-red-500" : "border-[#ddd]"
              }`}
            />
            {/* Error message for email */}
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
                required: "Password is required", // Custom error message
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e2ebf] transition-colors ${
                errors.password ? "border-red-500" : "border-[#ddd]"
              }`}
            />
            {/* Error message for password */}
            {errors.password && (
              <span className="text-red-500 font-semibold mt-1">
                {errors.password.message as string}
              </span>
            )}
          </div>

          {/* Submit button */}
          <button className="bg-[#2e2ebf] p-3 rounded-xl text-white font-bold text-lg hover:bg-[#1d1dbf] transition duration-200">
            Login
          </button>
        </form>
      </div>

      {/* SignUp link */}
      <p>
        New?{" "}
        <Link href="/signup">
          <span className="text-[#2e2ebf] hover:underline cursor-pointer">
            SignUp
          </span>
        </Link>
      </p>
    </div>
  );
};

export default login;
