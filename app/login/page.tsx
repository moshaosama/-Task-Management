"use client";
import { FetchLogin } from "@/Store/Reducer/Login/LoginSlice"; // Importing the FetchLogin action from Redux slice to handle login action
import { AppDispatch } from "@/Store/Store"; // Importing AppDispatch type to properly type the dispatch function
import Link from "next/link"; // Importing Link from Next.js for routing to the signup page
import { useForm } from "react-hook-form"; // Importing react-hook-form for form management and validation
import { useDispatch } from "react-redux"; // Importing useDispatch from react-redux to dispatch actions

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Extracting the necessary methods and errors from react-hook-form
  } = useForm(); // Initializing useForm hook
  const dispatch = useDispatch<AppDispatch>(); // Setting up the dispatch function with AppDispatch typing

  const onSubmit = (data: any) => {
    dispatch(FetchLogin(data)); // Dispatching the login action with form data on submit
  };

  return (
    <div className="w-[118pc] h-[50pc] max-sm:w-[21pc] flex flex-col max-sm:h-[40pc] gap-10 justify-center items-center">
      {/* Container for the login form */}
      <div className="bg-gray-100 p-3 w-96 max-sm:w-80 shadow-xl rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">
            Stay Updated on Your professional world
          </p>
        </div>

        {/* Form for login */}
        <form
          onSubmit={handleSubmit(onSubmit)} // Form submission handler using handleSubmit from react-hook-form
          className="flex flex-col gap-4 mt-5"
        >
          {/* Email field */}
          <p className="flex flex-col">
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register("email", {
                required: "email is Required", // Validation rule for email
              })}
              className="p-2 border-[#ddd] border-[2px] rounded-lg"
            />
            {/* Error message for email field */}
            <span className="text-red-500 font-semibold">
              {errors.email?.message && (errors.email?.message as string)}
            </span>
          </p>

          {/* Password field */}
          <p className="flex flex-col">
            <label htmlFor="password" className="text-gray-500">
              Password
            </label>
            <input
              id="password"
              type="text"
              {...register("password", {
                required: "password is Required", // Validation rule for password
              })}
              className="p-2 border-[#ddd] border-[2px] rounded-lg"
            />
            {/* Error message for password field */}
            <span className="text-red-500 font-semibold">
              {errors.password?.message && (errors.password?.message as string)}
            </span>
          </p>

          {/* Submit button */}
          <button className="bg-[#2e2ebf] p-3 rounded-xl text-white font-bold text-lg">
            Login
          </button>
        </form>
      </div>

      {/* SignUp link */}
      <p>
        New?
        <Link href={"/signup"}>
          <span className="text-[#2e2ebf] hover:underline cursor-pointer">
            {"  "}SignUp
          </span>
        </Link>
      </p>
    </div>
  );
};

export default login;
