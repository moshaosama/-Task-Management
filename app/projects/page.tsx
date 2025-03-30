import { FiPlus } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <div className="flex items-center gap-5">
        <div>
          <h1 className="text-2xl font-extrabold">Projects</h1>
          <p className="text-gray-400">8 Projects</p>
        </div>
        <div>
          <button className="bg-[#2e2ebf] font-bold text-white rounded-xl flex items-center gap-3 p-2">
            <FiPlus size={18} />
            Add New
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
