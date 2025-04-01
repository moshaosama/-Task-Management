import React from "react";
import { useSelector } from "react-redux"; // Importing to access Redux store state
import { RootState } from "@/Store/Store"; // Root state type for the Redux store

const RecentTasks = () => {
  // Accessing the 'AllTasks' slice from the Redux store using useSelector
  const allTasks = useSelector((state: RootState) => state.AllTasks);

  // You can add a loading state here to show a loading spinner or message while the tasks are being fetched.
  // Example: if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full h-auto flex flex-wrap gap-5 justify-center max-sm:justify-start">
      {/* Loop through all tasks and render them */}
      {allTasks?.data?.map(
        (el: {
          title: string;
          completed: string;
          date: string;
          _id: string;
        }) => (
          <div
            className="bg-gray-200 p-6 rounded-xl w-[24pc] max-sm:w-[21pc] flex flex-col justify-between"
            key={el._id} // Ensure that each task has a unique key for efficient rendering
          >
            {/* Displaying task title */}
            <h1 className="text-lg font-semibold">{el.title}</h1>

            {/* Displaying the status of the task */}
            <div
              className={`text-sm ${
                el.completed === "Completed"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {el.completed}
            </div>

            {/* Displaying the creation date of the task */}
            <p className="text-xs text-gray-500">
              {new Date(el.date).toLocaleDateString()}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default RecentTasks;
