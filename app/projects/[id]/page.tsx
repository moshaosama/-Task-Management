"use client";

import AddNewTasks from "@/app/projects/Components/AddNewTask";
import Button from "@/app/components/Button";
import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetProductById } from "@/Store/Reducer/ProjectSlice/getProjectByIdSlice";
import { fetchGetTasks } from "@/Store/Reducer/Tasks/getTasksSlice";
import { RootState } from "@/Store/Store";
import { useParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useSelector } from "react-redux";
import RenderTasks from "./Components/RenderTasks";

type ProductByIdType = {
  data: {
    _id: string;
    title: string;
    description: string;
  };
};

const TasksPage = () => {
  const { id } = useParams();
  const projectById: ProductByIdType = useSelector(
    (state: RootState) => state.projectById
  );
  const tasks = useSelector((state: RootState) => state.Tasks);
  useFastDispatch(fetchGetTasks(id as string));
  useFastDispatch(fetchGetProductById(id as string));
  const [AddTask, setAddTask] = useState(false);

  const toggleAddTaks = () => {
    setAddTask((prev) => !prev);
  };

  // تحديث حالة التسك المحددة فقط

  return (
    <>
      <div className="bg-[#2e2ebf] flex justify-between items-center absolute top-0 -left-5 w-[103.8rem] max-sm:w-[24.5pc] max-lg:w-[24.5pc] max-md:w-[24.5pc] h-40 p-10">
        <div className="text-white">
          <h1 className="text-2xl font-bold">
            {(projectById?.data && projectById?.data?.title) || "Loading..."}
          </h1>
          <p className="text-sm">{tasks?.data?.length} Tasks</p>
        </div>
        <div className="mr-40 max-sm:mr-0 max-md:mr-0 max-lg:mr-0 font-bold flex flex-col items-center text-white text-2xl">
          <h1>0%</h1>
          <p className="text-sm">Completed</p>
        </div>
      </div>
      <div className="relative top-40 ">
        <div className="flex gap-5 items-center">
          <h1 className="text-3xl font-bold">All Tasks</h1>
          <Button Func={toggleAddTaks} />
        </div>
        <div className="mt-10 w-full">{<RenderTasks />}</div>
      </div>
      <div>
        <AddNewTasks Active={AddTask} setActive={toggleAddTaks} />
      </div>
    </>
  );
};

export default TasksPage;
