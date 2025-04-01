import React from "react";
import { FiPlus } from "react-icons/fi";

const Button = ({ Func }: { Func: () => void }) => {
  return (
    <button
      onClick={Func}
      className="bg-[#2e2ebf] cursor-pointer hover:bg-[#665a99] transition-all duration-200 font-bold text-white rounded-xl flex items-center gap-3 p-2"
    >
      <FiPlus size={18} />
      Add New
    </button>
  );
};

export default Button;
