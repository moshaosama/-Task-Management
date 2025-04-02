"use client";
import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetAllTasks } from "@/Store/Reducer/Tasks/getTasksSlice";
import { RootState } from "@/Store/Store";
import { useSelector } from "react-redux";

const RecentTasks = () => {
  const allTasks = useSelector((state: RootState) => state.AllTasks);
  useFastDispatch(fetchGetAllTasks());

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold">Recent Tasks</h1>
      <div className="overflow-y-scroll h-[34pc] max-sm:h-72">
        {allTasks?.data?.map(
          (el: {
            Title: string;
            _id: string;
            completed: string;
            Date: string;
          }) => {
            return (
              <div
                key={el._id}
                className={`bg-gray-200 p-6 rounded-xl shadow-lg mt-5 w-[63pc] max-sm:w-[21pc] max-md:w-[21pc] max-lg:w-[21pc] flex justify-between items-center`}
              >
                <div className="flex w-full items-center justify-between gap-10">
                  <h1 className="text-lg font-bold w-10">{el.Title}</h1>
                  <div className="flex flex-col items-center">
                    <h1 className="text-black text-lg font-bold">Status</h1>
                    <p className="text-[#2e2ebf] text-md">{el.completed}</p>
                  </div>
                  <div className="flex flex-col items-center max-sm:hidden max-lg:hidden max-md:hidden">
                    <h1 className="text-black text-lg font-bold">Created at</h1>
                    <p className="text-[#2e2ebf] text-md">{el.Date}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-black text-lg font-bold">Created at</h1>
                    <p className="text-[#2e2ebf] text-md">{el.Date}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RecentTasks;
