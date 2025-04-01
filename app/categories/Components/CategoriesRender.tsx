import useFastDispatch from "@/Hooks/useFastDispatch"; // Custom hook to dispatch actions quickly
import { fetchGetAllCategories } from "@/Store/Reducer/Categories/getAllCategories"; // Action to fetch all categories
import { RootState } from "@/Store/Store"; // Root state type for the Redux store
import { useSelector } from "react-redux"; // Hook to access Redux state

const CategoriesRender = () => {
  // Use `useSelector` to access the Categories state from Redux store
  const Categories = useSelector((state: RootState) => state.Categories);

  // Dispatch action to fetch all categories when the component is rendered
  useFastDispatch(fetchGetAllCategories());

  return (
    <div className="mt-14">
      {/* Check if Categories data is available, then map over the categories */}
      {Categories?.data?.map(
        (el: { Title: string; projects: string[]; _id: string }) => {
          return (
            <div
              className="bg-gray-200 p-5 w-[63pc] max-sm:w-[21pc] max-md:[21pc] max-lg:w-[21pc] mt-3 rounded-xl"
              key={el?._id} // Use the category ID as the key for each category
            >
              {/* Display category title with hover effect */}
              <h1 className="text-xl font-bold hover:text-[#2e2ebf] cursor-pointer">
                {el.Title} {/* Display the title of the category */}
              </h1>
              {/* Display the number of projects in the category */}
              <p className="text-sm text-gray-400">
                {el?.projects?.length} Projects{" "}
                {/* Show the count of projects */}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CategoriesRender;
