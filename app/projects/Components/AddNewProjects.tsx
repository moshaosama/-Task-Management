"use client";

import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetAllCategories } from "@/Store/Reducer/Categories/getAllCategories";
import { FetchcreateProject } from "@/Store/Reducer/ProjectSlice/createProjectSlice";
import { AppDispatch, RootState } from "@/Store/Store";
import React, { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useNotify from "@/Hooks/useNotify";

// تعريف مخطط التحقق باستخدام Zod
const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

const AddNewProjects = memo(
  ({ Active, setActive }: { Active: boolean; setActive: () => void }) => {
    const dispatch = useDispatch<AppDispatch>();
    const Categories = useSelector((state: RootState) => state.Categories);
    const [selectedCategory, setSelectedCategory] = useState("");
    const { notify } = useNotify();

    useFastDispatch(fetchGetAllCategories());

    // استخدام react-hook-form مع Zod للتحقق
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(projectSchema),
      mode: "onChange",
    });

    const onSubmit = async (data: any) => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        const accessToken = user?.access_token;

        if (!accessToken) {
          notify("Please Login First");
        }

        await dispatch(
          FetchcreateProject({ ...data, categoryID: selectedCategory })
        ).unwrap();

        toast.success("Project added successfully!");
        setActive();
      } catch (error) {
        toast.error("Failed to add project. Please try again.");
      }
    };

    return (
      <>
        {Active ? (
          <div className="z-50 flex justify-center items-center h-[100vh] max-sm:w-[24.5pc] max-md:w-[24.5pc] max-lg:w-[24.5pc] bg-[#0101018f] absolute top-0 -left-5  w-[103.97pc]">
            <div className="bg-white p-3 rounded-xl w-[40pc] max-sm:w-[21pc]">
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
                className="mt-5 flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="flex flex-col">
                  <label htmlFor="title" className="text-gray-500">
                    Project title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="p-2 border-[#ddd] border-[2px] rounded-lg"
                    {...register("title")}
                  />
                  <span className="text-red-500 font-semibold">
                    {errors.title?.message}
                  </span>
                </p>
                <p className="flex flex-col">
                  <label htmlFor="description" className="text-gray-500">
                    Description
                  </label>
                  <input
                    id="description"
                    type="text"
                    className="p-2 border-[#ddd] border-[2px] rounded-lg"
                    {...register("description")}
                  />
                  <span className="text-red-500 font-semibold">
                    {errors.description?.message}
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
                    <option>Most Popular</option>
                    {Categories?.data?.map(
                      (el: { Title: string; _id: string }) => (
                        <option key={el._id} value={el?._id}>
                          {el.Title}
                        </option>
                      )
                    )}
                  </select>
                  {/* ///////////////// */}
                </p>
                <button
                  type="submit"
                  className="bg-[#2e2ebf] p-2 text-white cursor-pointer rounded-lg"
                >
                  Add a project
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

export default AddNewProjects;
