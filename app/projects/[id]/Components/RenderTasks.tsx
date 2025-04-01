"use client";

import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetTasks } from "@/Store/Reducer/Tasks/getTasksSlice";
import { fetchUpdateCompleteTask } from "@/Store/Reducer/Tasks/UpdateCompleteTaskSlice";
import { AppDispatch, RootState } from "@/Store/Store";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const RenderTasks = () => {
  const tasks = useSelector((state: RootState) => state.Tasks);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  useFastDispatch(fetchGetTasks(id as string));
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});
  const handleCheckboxChange = (taskId: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
    dispatch(fetchUpdateCompleteTask(taskId));
  };

  return (
    <>
      {tasks?.data &&
        tasks?.data?.map(
          (task: { _id: string; Title: string; completed: string }) => {
            return (
              <div
                key={task._id}
                className={`bg-gray-200 p-6 rounded-xl shadow-lg mt-5 w-[60pc] max-sm:w-[21pc] max-lg:w-[21pc] max-md:w-[21pc] flex justify-between items-center ${
                  checkedTasks[task._id] || task.completed === "completed"
                    ? "opacity-70"
                    : "opacity-100"
                }`}
              >
                <div className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    checked={
                      checkedTasks[task._id] ||
                      task.completed === "completed" ||
                      false
                    }
                    className="cursor-pointer"
                    onChange={() => handleCheckboxChange(task._id)}
                  />
                  <h1
                    className={`${
                      checkedTasks[task._id] || task.completed === "completed"
                        ? "line-through"
                        : ""
                    }`}
                  >
                    {task.Title}
                  </h1>
                </div>
                <AiOutlineEllipsis className="text-xl cursor-pointer" />
              </div>
            );
          }
        )}
    </>
  );
};

export default RenderTasks;
