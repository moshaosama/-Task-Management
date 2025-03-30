"use client";

import { AiFillDatabase, AiOutlineEllipsis } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import AddNewProjects from "../components/AddNewProjects";
import { useState } from "react";

const Projects = () => {
  const [Active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-5">
          <div>
            <h1 className="text-2xl font-extrabold">Projects</h1>
            <p className="text-gray-400">8 Projects</p>
          </div>
          <button
            onClick={toggleActive}
            className="bg-[#2e2ebf] cursor-pointer hover:bg-[#665a99] transition-all duration-200 font-bold text-white rounded-xl flex items-center gap-3 p-2"
          >
            <FiPlus size={18} />
            Add New
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5 my-52">
          <div className="bg-[#eee] p-3 rounded-xl w-96 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-[#2e2ebf] font-semibold">
                Website Reuseability
              </h1>
              <AiOutlineEllipsis size={20} color="black" cursor={"pointer"} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AiFillDatabase size={12} color="#6a7282" />
                  <h1 className="text-gray-500 text-sm">Progress</h1>
                </div>
                <p className="text-gray-500 text-sm">0/4</p>
              </div>
              <div className="h-1 rounded-full w-full bg-[#d1d1d1]"></div>
            </div>
          </div>
        </div>

        {Active && <AddNewProjects Active={Active} setActive={toggleActive} />}
      </div>
    </>
  );
};

export default Projects;
