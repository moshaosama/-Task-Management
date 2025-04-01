import React from "react";
import LatestProjects from "./LatestProjects"; // Importing the LatestProjects component to display the list of recent projects

const OverallProgress = () => {
  return (
    <div className="w-[34pc] max-sm:w-80">
      {" "}
      {/* Container for the overall progress component */}
      <div className="flex flex-col items-center gap-12 justify-center">
        {/* Header section for "Overall Progress" */}
        <h1 className="text-xl font-bold">Overall Progress</h1>

        {/* Circular progress display */}
        <div className="w-40 h-40 bg-[#2e2ebf] text-white flex flex-col items-center justify-center rounded-full">
          <h1 className="text-3xl font-bold">0%</h1>{" "}
          {/* Progress percentage, which is currently 0% */}
          <p>Progress</p>
        </div>
      </div>
      {/* Displaying the LatestProjects component below the progress circle */}
      <div className="mt-12 mx-10">
        <LatestProjects />
      </div>
    </div>
  );
};

export default OverallProgress;
