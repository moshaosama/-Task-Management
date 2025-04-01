"use client"; // 👈 This line ensures that the component runs on the client side, useful for hooks that depend on the browser environment

import useFastDispatch from "@/Hooks/useFastDispatch"; // Importing a custom hook to trigger dispatching actions
import { fetchGetAllProjects } from "@/Store/Reducer/ProjectSlice/getProjectSlice"; // Importing an action to fetch all projects
import { RootState } from "@/Store/Store"; // Importing RootState type for type safety when accessing the Redux store
import React from "react"; // React is being imported to define the component
import { FaCheck, FaLaptopCode } from "react-icons/fa"; // Importing icons for project and task count displays
import { ImMenu } from "react-icons/im"; // Importing icon for categories display
import { useSelector } from "react-redux"; // Importing useSelector hook to access the Redux store

const DashBoardDetails = () => {
  // Retrieving state from the Redux store
  const Projects = useSelector((state: RootState) => state.Projects);
  const Categories = useSelector((state: RootState) => state.Categories);
  const Tasks = useSelector((state: RootState) => state.AllTasks);

  // Dispatching action to fetch all projects from the store
  useFastDispatch(fetchGetAllProjects());

  return (
    <div className="mt-4 flex max-sm:flex-col max-md:flex-col max-lg:flex-col max-sm:items-start max-lg:items-start max-md:items-start items-center gap-5">
      {/* Card for Total Projects */}
      <div className="bg-[#2e2ebf] p-5 w-80 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="font-bold text-3xl">{Projects?.data?.length}</h1>
            <p className="text-sm">Total Projects</p>
          </div>
          <div>
            <FaLaptopCode size={40} color="white" />{" "}
            {/* Icon representing projects */}
          </div>
        </div>
      </div>

      {/* Card for Total Tasks */}
      <div className="bg-[#2e2ebf] p-5 w-80 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="font-bold text-3xl">{Tasks?.data?.length}</h1>
            <p className="text-sm">Total Tasks</p>
          </div>
          <div>
            <FaCheck size={40} color="white" /> {/* Icon representing tasks */}
          </div>
        </div>
      </div>

      {/* Card for Total Categories */}
      <div className="bg-[#2e2ebf] p-5 w-80 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="font-bold text-3xl">{Categories?.data?.length}</h1>
            <p className="text-sm">Categories</p>
          </div>
          <div>
            <ImMenu size={40} color="white" />{" "}
            {/* Icon representing categories */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardDetails;
