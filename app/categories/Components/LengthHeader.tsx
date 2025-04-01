import useFastDispatch from "@/Hooks/useFastDispatch"; // Custom hook to dispatch actions quickly
import { fetchGetAllCategories } from "@/Store/Reducer/Categories/getAllCategories"; // Action to fetch all categories
import { RootState } from "@/Store/Store"; // Type for the Redux root state
import React from "react"; // Import React for JSX usage
import { useSelector } from "react-redux"; // Hook to access Redux state

const LengthHeader = () => {
  // Access the Categories data from Redux store using `useSelector`
  const Categories = useSelector((state: RootState) => state.Categories);

  // Dispatch action to fetch all categories when the component renders
  useFastDispatch(fetchGetAllCategories());

  return (
    // Display the number of categories
    <p className="text-gray-500">
      {Categories?.data?.length} Categories{" "}
      {/* Display the count of categories */}
    </p>
  );
};

export default LengthHeader;
