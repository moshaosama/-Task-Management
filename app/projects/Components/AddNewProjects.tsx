"use client";

import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetAllCategories } from "@/Store/Reducer/Categories/getAllCategories";
import { FetchcreateProject } from "@/Store/Reducer/ProjectSlice/createProjectSlice";
import { AppDispatch, RootState } from "@/Store/Store";
import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const AddNewProjects = memo(
  ({ Active, setActive }: { Active: boolean; setActive: () => void }) => {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();
    const [selectedCategory, setSelectedCategory] = useState("");

    const Categories = useSelector((state: RootState) => state.Categories);

    useFastDispatch(fetchGetAllCategories());

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (data: any) => {
      dispatch(FetchcreateProject({ ...data, categoryID: selectedCategory }));
      // console.log({ ...data, categoryID: selectedCategory });
    };

    return (
      <>
        {Active ? (
          <div className="z-50 flex justify-center items-center h-[100vh] max-sm:w-[24.5pc] max-md:w-[24.5pc] max-lg:w-[24.5pc] bg-[#0101018f] absolute top-0 -left-5  w-[103.97pc]">
            <div className="bg-white p-3 rounded-xl w-[40pc] max-sm:w-[21pc] max-md:w-[21pc] max-lg:w-[21pc] ">
              <div className="flex justify-between">
                <h1 className="text-[#2e2ebf] text-xl font-bold">
                  Add a new project
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
                    Project title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="p-2 border-[#ddd] border-[2px] rounded-lg"
                    {...register("title", { required: "Title is Required" })}
                  />
                  <span className="text-red-500 font-semibold">
                    {errors.title?.message && (errors.title?.message as string)}
                  </span>
                </p>
                <p className="flex flex-col">
                  <label htmlFor="name" className="text-gray-500">
                    Description
                  </label>
                  <input
                    id="description"
                    type="text"
                    {...register("description", {
                      required: "description is Required",
                    })}
                    className="p-2 border-[#ddd] border-[2px] rounded-lg"
                  />
                  <span className="text-red-500 font-semibold">
                    {errors.description?.message &&
                      (errors.description?.message as string)}
                  </span>
                </p>

                <p className="flex flex-col">
                  <label htmlFor="name" className="text-gray-500">
                    Categories
                  </label>
                  {/* /////////// Categories Render ////////////*/}
                  <select
                    className="p-3 border-[#ddd] border-[2px] rounded-lg"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {Categories?.data?.map(
                      (el: { Title: string; _id: string }) => (
                        <option key={el._id} value={el?._id}>
                          {el.Title}
                        </option>
                      )
                    )}
                  </select>
                  {/* ///////////////// */}
                  <span className="text-red-500 font-semibold">
                    {errors.Categories?.message &&
                      (errors.Categories?.message as string)}
                  </span>
                </p>

                <button
                  disabled={isSubmitting}
                  className="bg-[#2e2ebf] p-2 text-white cursor-pointer rounded-lg"
                >
                  Add a project
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </>
    );
  }
);

export default AddNewProjects;
