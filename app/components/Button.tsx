import React from "react"; // Import React for JSX usage
import { FiPlus } from "react-icons/fi"; // Import the FiPlus icon from react-icons

// Button component receives a `Func` prop, which is a function to execute on button click
const Button = ({ Func }: { Func: () => void }) => {
  return (
    // Button with styling and functionality
    <button
      onClick={Func} // The button triggers the `Func` function when clicked
      className="bg-[#2e2ebf] cursor-pointer hover:bg-[#665a99] transition-all duration-200 font-bold text-white rounded-xl flex items-center gap-3 p-2"
    >
      {/* Plus icon next to the text */}
      <FiPlus size={18} />
      {/* Button label */}
      Add New
    </button>
  );
};

export default Button;
