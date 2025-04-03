"use client";

import useNotify from "@/Hooks/useNotify";
import { FetchcreateProject } from "@/Store/Reducer/ProjectSlice/createProjectSlice";
import { fetchCreateTask } from "@/Store/Reducer/Tasks/createTaskSlice";
import {
  fetchGetAllTasks,
  fetchGetTasks,
} from "@/Store/Reducer/Tasks/getTasksSlice";
import { AppDispatch } from "@/Store/Store";
import { useParams } from "next/navigation";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const AddNewTasks = memo(
  ({ Active, setActive }: { Active: boolean; setActive: () => void }) => {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();
    const { id } = useParams();
    const { notify } = useNotify();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (data: any) => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        const accessToken = user?.access_token;

        if (!accessToken) {
          notify("Please Login First");
        }
        dispatch(fetchCreateTask({ ...data, projectID: id }));
        notify("Addedd Successfully!");
        dispatch(fetchGetTasks(id as string));
        setActive();
      } catch (err) {
        notify(err as string);
      }
    };
    return (
      <>
        {Active ? (
          <div className="z-50 flex justify-center items-center h-[100vh] bg-[#0101018f] max-sm:w-[24.5pc] max-md:w-[24.5pc] max-lg:w-[24.5pc] absolute top-0 -left-5  w-[103.97pc]">
            <div className="bg-white p-3 rounded-xl w-[40pc] max-sm:w-[21pc] max-md:w-[21pc] max-lg:w-[21pc] ">
              <div className="flex justify-between">
                <h1 className="text-[#2e2ebf] text-xl font-bold">
                  Add a new Task
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
                    Task Title
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
                  Add a task
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

export default AddNewTasks;
