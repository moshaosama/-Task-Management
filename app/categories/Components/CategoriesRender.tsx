import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetAllCategories } from "@/Store/Reducer/Categories/getAllCategories";
import { RootState } from "@/Store/Store";
import { useSelector } from "react-redux";

const CategoriesRender = () => {
  const Categories = useSelector((state: RootState) => state.Categories);
  useFastDispatch(fetchGetAllCategories());

  return (
    <div className="mt-14">
      {Categories?.data?.map(
        (el: { Title: string; projects: string[]; _id: string }) => {
          return (
            <div
              className="bg-gray-200 p-5 w-[63pc] max-sm:w-[21pc] max-md:[21pc] max-lg:w-[21pc] mt-3 rounded-xl"
              key={el?._id}
            >
              <h1 className="text-xl font-bold hover:text-[#2e2ebf] cursor-pointer">
                {el.Title}
              </h1>
              <p className="text-sm text-gray-400">
                {el?.projects?.length} Projects
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CategoriesRender;
