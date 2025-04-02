"use client"; // 👈 This line ensures the component is rendered on the client side, which is important for hooks like useState and useDispatch

import Button from "@/app/components/Button"; // Importing the Button component
import AddNewProjects from "@/app/projects/Components/AddNewProjects"; // Importing the AddNewProjects component
import useFastDispatch from "@/Hooks/useFastDispatch"; // Importing custom hook to dispatch actions
import { fetchGetAllProjects } from "@/Store/Reducer/ProjectSlice/getProjectSlice"; // Importing the action to fetch all projects from the store
import { RootState } from "@/Store/Store"; // Importing RootState type for type safety when accessing the Redux store
import Link from "next/link"; // Importing Link component to handle navigation between pages
import { useState } from "react"; // Importing useState hook to manage the state
import { AiFillDatabase } from "react-icons/ai"; // Importing an icon for "Progress"
import { useSelector } from "react-redux"; // Importing useSelector to access Redux state

const LatestProjects = () => {
  // Retrieving the list of projects from the Redux store
  const Projects = useSelector((state: RootState) => state.Projects);

  // Dispatching the action to fetch all projects when the component is mounted
  useFastDispatch(fetchGetAllProjects());

  // State to control whether the "Add New Project" modal is visible
  const [AddProject, setAddProject] = useState(false);

  // Function to toggle the visibility of the "Add New Project" modal
  const toggleAddProject = () => {
    setAddProject((prev) => !prev);
  };

  console.log(Projects); // Logging the fetched projects for debugging purposes

  return (
    <>
      {/* Section displaying the title and button to toggle Add New Project modal */}
      <div className="flex justify-between items-center max-sm:w-[17pc] max-sm:items-start">
        <h1 className="text-lg font-bold">Latest Project</h1>
        <Button Func={toggleAddProject} />{" "}
        {/* Button to trigger Add Project modal */}
      </div>

      {/* Section to display a scrollable list of projects */}
      <div className="overflow-y-scroll h-[30pc] max-sm:h-72 max-md:h-72 max-lg:h-72">
        {/* Mapping through the projects and displaying them */}
        {Array.isArray(Projects?.data) && Projects.data.length > 0 ? (
          Projects.data.map(
            (el: {
              title: string;
              description: string;
              _id: string;
              tasks: string[];
            }) => {
              return (
                <div
                  className="bg-[#eee] p-3 rounded-xl w-96 max-sm:w-[16pc] flex mt-5 flex-col relative"
                  key={el._id}
                >
                  {/* Project Title and Description */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <Link href={`projects/${el?._id}`}>
                        <h1 className="text-black hover:text-[#2e2ebf] cursor-pointer font-semibold">
                          {el.title} {/* Project Title */}
                        </h1>
                      </Link>
                      <p className="text-sm text-gray-500">{el.description}</p>{" "}
                      {/* Project Description */}
                    </div>
                  </div>

                  {/* Progress section */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AiFillDatabase size={12} color="#6a7282" />{" "}
                        {/* Icon for progress */}
                        <h1 className="text-gray-500 text-sm">Progress</h1>
                      </div>
                      {/* Displaying progress as 0/total tasks */}
                      <p className="text-gray-500 text-sm">
                        0/{el.tasks?.length}
                      </p>
                    </div>
                    {/* Progress bar (currently static) */}
                    <div className="h-1 rounded-full w-full bg-[#d1d1d1]"></div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <p>No projects available</p> // Displaying a fallback message when no projects exist
        )}
      </div>

      {/* Add New Project Modal */}
      <AddNewProjects Active={AddProject} setActive={toggleAddProject} />
    </>
  );
};

export default LatestProjects;
