"use client"; // لحد لما نشوف هنحط اي فى ال Click
import { useState } from "react";
import Button from "../components/Button";
import AddNewCategories from "./Components/AddNewCategories";
import CategoriesRender from "./Components/CategoriesRender";
import LengthHeader from "./Components/LengthHeader";

const Categories = () => {
  const [AddCategory, setAddCategory] = useState(false);
  const toggleAddCategory = () => {
    setAddCategory((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className="flex items-center gap-5">
          <div>
            <h1 className="text-2xl font-extrabold">Categories</h1>
            <LengthHeader />
          </div>
          <Button Func={toggleAddCategory} />
        </div>
        <CategoriesRender />
        <AddNewCategories Active={AddCategory} setActive={toggleAddCategory} />
      </div>
    </>
  );
};

export default Categories;
