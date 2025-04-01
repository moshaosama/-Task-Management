import useFastDispatch from "@/Hooks/useFastDispatch";
import { fetchGetAllCategories } from "@/Store/Reducer/Categories/getAllCategories";
import { RootState } from "@/Store/Store";
import React from "react";
import { useSelector } from "react-redux";

const LengthHeader = () => {
  const Categories = useSelector((state: RootState) => state.Categories);

  useFastDispatch(fetchGetAllCategories());
  return <p className="text-gray-500">{Categories?.data?.length} Categories</p>;
};

export default LengthHeader;
