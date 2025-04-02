"use client";

import useNotify from "@/Hooks/useNotify";
// Import necessary functions and libraries
import { FetchcreateCategory } from "@/Store/Reducer/Categories/CreateCategory";
import { AppDispatch } from "@/Store/Store";
import { useParams } from "next/navigation";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Bounce, toast, ToastContainer } from "react-toastify";

// Define the AddNewCategories component with memoization to prevent unnecessary re-renders
const AddNewCategories = memo(
  ({ Active, setActive }: { Active: boolean; setActive: () => void }) => {
    const {notify} = useNotify();

    // Using useForm hook to handle form state and validation
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();

    // Access the URL parameters (in case you need the id parameter)
    const { id } = useParams();

    // Dispatch function to send actions to the Redux store
    const dispatch = useDispatch<AppDispatch>();

    // Define the onSubmit function to handle form submission
    const onSubmit = (data: any) => {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      const accessToken = user?.access_token;

      if (!accessToken) {
        notify("Please Login First");
      }

      dispatch(FetchcreateCategory(data)); // Dispatch the action to create a category
    };

    return (
      <>
        {/* Conditional rendering of the modal when Active is true */}
        {Active ? (
          <div className="z-50 flex justify-center items-center h-[100vh] max-sm:w-[24.5pc] max-md:w-[24.5pc] max-lg:w-[24.5pc] bg-[#0101018f] absolute top-0 -left-5  w-[103.97pc]">
            {/* Modal content */}
            <div className="bg-white p-3 rounded-xl w-[40pc] max-sm:w-[21pc] max-md:w-[21pc] max-lg:w-[21pc] ">
              {/* Header with title and close button */}
              <div className="flex justify-between">
                <h1 className="text-[#2e2ebf] text-xl font-bold">
                  Add a new Category
                </h1>
                <h1
                  className="text-xl text-[#2e2ebf] cursor-pointer"
                  onClick={setActive} // Close modal when clicked
                >
                  X
                </h1>
              </div>
              {/* Form for adding a category */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-5 flex flex-col gap-5"
              >
                <p className="flex flex-col">
                  <label htmlFor="title" className="text-gray-500">
                    Category Title
                  </label>
                  <input
                    id="Title"
                    type="text"
                    className="p-2 border-[#ddd] border-[2px] rounded-lg"
                    {...register("Title", { required: "Title is Required" })} // Registering input with validation
                  />
                  {/* Display validation error message if the title is missing */}
                  <span className="text-red-500 font-semibold">
                    {errors.Title?.message && (errors.Title?.message as string)}
                  </span>
                </p>
                {/* Submit button to add the category */}
                <button
                  disabled={isSubmitting} // Disable the button when submitting
                  className="bg-[#2e2ebf] p-2 text-white cursor-pointer rounded-lg"
                >
                  Add a Category
                </button>
              </form>
            </div>
          </div>
        ) : null}
        <ToastContainer />
      </>
    );
  }
);

// Export the component to be used elsewhere
export default AddNewCategories;
