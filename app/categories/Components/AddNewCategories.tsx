"use client";

import { FetchcreateCategory } from "@/Store/Reducer/Categories/CreateCategory";
import { FetchcreateProject } from "@/Store/Reducer/ProjectSlice/createProjectSlice";
import { fetchCreateTask } from "@/Store/Reducer/Tasks/createTaskSlice";
import { AppDispatch } from "@/Store/Store";
import { useParams } from "next/navigation";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const AddNewCategories = memo(
  ({ Active, setActive }: { Active: boolean; setActive: () => void }) => {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (data: any) => {
      dispatch(FetchcreateCategory(data));
    };
    return (
      <>
        {Active ? (
          <div className="z-50 flex justify-center items-center h-[100vh] max-sm:w-[24.5pc] max-md:w-[24.5pc] max-lg:w-[24.5pc] bg-[#0101018f] absolute top-0 -left-5  w-[103.97pc]">
            <div className="bg-white p-3 rounded-xl w-[40pc] max-sm:w-[21pc] max-md:w-[21pc] max-lg:w-[21pc] ">
              <div className="flex justify-between">
                <h1 className="text-[#2e2ebf] text-xl font-bold">
                  Add a new Category
                </h1>
                <h1
                  className="text-xl text-[#2e2ebf] cursor-pointer"
                  onClick={setActive}
                >
                  X
                </h1>
              </div>
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
                    {...register("Title", { required: "Title is Required" })}
                  />
                  <span className="text-red-500 font-semibold">
                    {errors.Title?.message && (errors.Title?.message as string)}
                  </span>
                </p>
                <button
                  disabled={isSubmitting}
                  className="bg-[#2e2ebf] p-2 text-white cursor-pointer rounded-lg"
                >
                  Add a Category
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </>
    );
  }
);

export default AddNewCategories;
