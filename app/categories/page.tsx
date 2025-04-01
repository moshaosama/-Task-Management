"use client"; // Indicating this is a client-side component (likely for Next.js)
import { useState } from "react"; // Import useState to manage component state
import Button from "../components/Button"; // Import custom Button component
import AddNewCategories from "./Components/AddNewCategories"; // Import AddNewCategories component
import CategoriesRender from "./Components/CategoriesRender"; // Import CategoriesRender component
import LengthHeader from "./Components/LengthHeader"; // Import LengthHeader component

const Categories = () => {
  // Define state to toggle visibility of AddNewCategories component
  const [AddCategory, setAddCategory] = useState(false);

  // Function to toggle the AddCategory state
  const toggleAddCategory = () => {
    setAddCategory((prev) => !prev); // Toggle the state from true to false or vice versa
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-5">
          <div>
            {/* Category heading and LengthHeader component */}
            <h1 className="text-2xl font-extrabold">Categories</h1>
            <LengthHeader />
          </div>

          {/* Button to toggle the display of the AddNewCategories component */}
          <Button Func={toggleAddCategory} />
        </div>

        {/* Render the list of categories */}
        <CategoriesRender />

        {/* AddNewCategories component, passing its active state and toggle function as props */}
        <AddNewCategories Active={AddCategory} setActive={toggleAddCategory} />
      </div>
    </>
  );
};

export default Categories;
