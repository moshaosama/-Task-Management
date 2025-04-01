"use client";

import Button from "@/app/components/Button";
import AddNewProjects from "@/app/projects/Components/AddNewProjects";
import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetAllProjects } from "@/Store/Reducer/ProjectSlice/getProjectSlice";
import { RootState } from "@/Store/Store";
import Link from "next/link";
import { useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { useSelector } from "react-redux";

const LatestProjects = () => {
  const Projects = useSelector((state: RootState) => state.Projects);
  useFastDispatch(fetchGetAllProjects());
  const [AddProject, setAddProject] = useState(false);

  const toggleAddProject = () => {
    setAddProject((prev) => !prev);
  };

  console.log(Projects);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Latest Project</h1>
        <Button Func={toggleAddProject} />
      </div>
      <div className="overflow-y-scroll h-[30pc]">
        {Projects?.data?.map(
          (el: {
            title: string;
            description: string;
            _id: string;
            tasks: string[];
          }) => {
            return (
              <div
                className="bg-[#eee] p-3 rounded-xl w-96 flex mt-5 flex-col  relative"
                key={el._id}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <Link href={`projects/${el?._id}`}>
                      <h1 className="text-black hover:text-[#2e2ebf] cursor-pointer font-semibold">
                        {el.title}
                      </h1>
                    </Link>
                    <p className="text-sm text-gray-500">{el.description}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AiFillDatabase size={12} color="#6a7282" />
                      <h1 className="text-gray-500 text-sm">Progress</h1>
                    </div>
                    <p className="text-gray-500 text-sm">
                      0/{el.tasks?.length}
                    </p>
                  </div>
                  <div className="h-1 rounded-full w-full bg-[#d1d1d1]"></div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <AddNewProjects Active={AddProject} setActive={toggleAddProject} />
    </>
  );
};

export default LatestProjects;
