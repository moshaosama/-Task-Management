"use client"; // This is required for Next.js to handle client-side rendering

import useFastDispatch from "@/Hooks/useFastDispatch"; // Custom hook to dispatch actions quickly
import { fetchGetTasks } from "@/Store/Reducer/Tasks/getTasksSlice"; // Action to fetch tasks from the Redux store
import { fetchUpdateCompleteTask } from "@/Store/Reducer/Tasks/UpdateCompleteTaskSlice"; // Action to update the task's completion status
import { AppDispatch, RootState } from "@/Store/Store"; // AppDispatch and RootState for typing the dispatch function and store state
import { useParams } from "next/navigation"; // To get the parameters from the URL
import React, { useState } from "react"; // React hooks for state management and component
import { AiOutlineEllipsis } from "react-icons/ai"; // Ellipsis icon for actions like editing or deleting tasks
import { useDispatch, useSelector } from "react-redux"; // Hooks to interact with Redux store

const RenderTasks = () => {
  const tasks = useSelector((state: RootState) => state.Tasks); // Accessing tasks state from Redux store
  const dispatch = useDispatch<AppDispatch>(); // Dispatch function to send actions to Redux
  const { id } = useParams(); // Getting the task ID from the URL parameters
  useFastDispatch(fetchGetTasks(id as string)); // Dispatching an action to fetch tasks using the provided task ID

  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({}); // Local state to track checked tasks

  // Handling the checkbox change event to update task completion
  const handleCheckboxChange = (taskId: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId], // Toggling the checked state
    }));
    dispatch(fetchUpdateCompleteTask(taskId)); // Dispatching action to update the task completion status in the Redux store
  };

  return (
    <>
      {tasks?.data && // Checking if tasks are available
        tasks?.data?.map(
          (task: { _id: string; Title: string; completed: string }) => {
            return (
              <div
                key={task._id} // Unique key for each task
                className={`bg-gray-200 p-6 rounded-xl shadow-lg mt-5 w-[60pc] max-sm:w-[21pc] max-lg:w-[21pc] max-md:w-[21pc] flex justify-between items-center ${
                  checkedTasks[task._id] || task.completed === "completed" // If task is checked or completed, reduce opacity
                    ? "opacity-70"
                    : "opacity-100"
                }`}
              >
                <div className="flex items-center gap-5">
                  <input
                    type="checkbox" // Checkbox to mark task as completed
                    checked={
                      checkedTasks[task._id] || task.completed === "completed" // Mark as checked if the task is marked completed
                    }
                    className="cursor-pointer"
                    onChange={() => handleCheckboxChange(task._id)} // Handle checkbox change
                  />
                  <h1
                    className={`${
                      checkedTasks[task._id] || task.completed === "completed"
                        ? "line-through" // Strike through the text if task is completed or checked
                        : ""
                    }`}
                  >
                    {task.Title} {/* Displaying the task title */}
                  </h1>
                </div>
                <AiOutlineEllipsis className="text-xl cursor-pointer" />{" "}
                {/* Ellipsis icon for actions */}
              </div>
            );
          }
        )}
    </>
  );
};

export default RenderTasks;
