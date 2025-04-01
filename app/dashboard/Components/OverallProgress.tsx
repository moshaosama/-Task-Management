import React from "react";
import LatestProjects from "./LatestProjects";

const OverallProgress = () => {
  return (
    <div className="w-[34pc]">
      <div className="flex flex-col items-center gap-12 justify-center">
        <h1 className="text-xl font-bold">Overall Progress</h1>
        <div className="w-40 h-40 bg-[#2e2ebf] text-white flex flex-col items-center justify-center rounded-full">
          <h1 className="text-3xl font-bold">0%</h1>
          <p>Progress</p>
        </div>
      </div>
      <div className="mt-12 mx-14">
        <LatestProjects />
      </div>
    </div>
  );
};

export default OverallProgress;
