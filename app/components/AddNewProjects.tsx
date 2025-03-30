"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddNewProjects = ({
  Active,
  setActive,
}: {
  Active: boolean;
  setActive: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      {Active ? (
        <div className="z-50 flex justify-center items-center h-[100vh] bg-[#0101018f] absolute top-0  w-[100pc]">
          <div className="bg-white p-3 rounded-xl w-[40pc] ">
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
                <label htmlFor="name" className="text-gray-500">
                  Project Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="p-2 border-[#ddd] border-[2px] rounded-lg"
                  {...register("name", { required: "Name is Required" })}
                />
                <span className="text-red-500 font-semibold">
                  {errors.name?.message && (errors.name?.message as string)}
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

              <button className="bg-[#2e2ebf] p-2 text-white cursor-pointer rounded-lg">
                Add a project
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddNewProjects;
