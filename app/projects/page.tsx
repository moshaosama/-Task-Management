"use client";

import AddNewProjects from "./Components/AddNewProjects";
import { useState } from "react";
import { fetchGetAllProjects } from "@/Store/Reducer/ProjectSlice/getProjectSlice";
import { RootState } from "@/Store/Store";
import { useSelector } from "react-redux";

import useFastDispatch from "@/Hooks/useFastDispatch";
import Button from "../components/Button";
import ProjectsRender from "./Components/ProjectsRender";

const Projects = () => {
  const [AddNewFrom, setAddNewFrom] = useState(false);

  const Products = useSelector((state: RootState) => state.Projects);

  const toggleActive = () => setAddNewFrom((prev) => !prev);

  useFastDispatch(fetchGetAllProjects());

  return (
    <div>
      <div className="flex items-center gap-5">
        <div>
          <h1 className="text-2xl font-extrabold">Projects</h1>
          <p className="text-gray-400">{Products?.data?.length} Projects</p>
        </div>
        <Button Func={toggleActive} />
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 gap-5 max-sm:gap-2 max-md:gap-2 my-10">
        {<ProjectsRender />}
      </div>

      {AddNewFrom && (
        <AddNewProjects Active={AddNewFrom} setActive={toggleActive} />
      )}
    </div>
  );
};

export default Projects;
