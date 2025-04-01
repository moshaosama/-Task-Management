"use client";

import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetAllProjects } from "@/Store/Reducer/ProjectSlice/getProjectSlice";
import { RootState } from "@/Store/Store";
import React from "react";
import { FaCheck, FaLaptopCode } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { useSelector } from "react-redux";

const DashBoardDetails = () => {
  const Projects = useSelector((state: RootState) => state.Projects);
  useFastDispatch(fetchGetAllProjects());
  return (
    <div className="mt-4 flex items-center gap-5">
      <div className="bg-[#2e2ebf] p-5 w-80 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-white ">
            <h1 className="font-bold text-3xl">{Projects?.data?.length}</h1>
            <p className="text-sm">Total Projects</p>
          </div>
          <div>
            <FaLaptopCode size={40} color="white" />
          </div>
        </div>
      </div>
      <div className="bg-[#2e2ebf] p-5 w-80 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-white ">
            <h1 className="font-bold text-3xl">{Projects?.data?.length}</h1>
            <p className="text-sm">Total Completes</p>
          </div>
          <div>
            <FaCheck size={40} color="white" />
          </div>
        </div>
      </div>
      <div className="bg-[#2e2ebf] p-5 w-80 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-white ">
            <h1 className="font-bold text-3xl">{Projects?.data?.length}</h1>
            <p className="text-sm">Categories</p>
          </div>
          <div>
            <ImMenu size={40} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardDetails;
