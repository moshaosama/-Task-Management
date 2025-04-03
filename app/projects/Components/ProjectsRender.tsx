"use client";

import { fetchDeleteProducts } from "@/Store/Reducer/ProjectSlice/DeleteProjectSlice";
import { AppDispatch, RootState } from "@/Store/Store";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillDatabase, AiOutlineEllipsis } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

type ProductType = {
  _id: string;
  title: string;
  description: string;
  tasks: string[];
  categoryID: {
    Title: string;
  };
};

const ProjectsRender = () => {
  const Dispatch = useDispatch<AppDispatch>();
  const Products = useSelector((state: RootState) => state.Projects);

  const handleDeleteProduct = (id: string) => {
    Dispatch(fetchDeleteProducts(id));
  };

  const [DetailsProject, setDetailsProject] = useState<string | null>(null);
  const toggleDetails = (id: string) => {
    setDetailsProject((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {Products.data.length > 0 ? (
        Products?.data?.map((el: ProductType) => (
          <div
            className="bg-[#eee] p-3 rounded-xl w-96 max-sm:w-[21pc] flex mt-10 flex-col gap-x-10 relative"
            key={el._id}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <Link href={`projects/${el?._id}`}>
                  <h1 className="text-black hover:text-[#2e2ebf] cursor-pointer font-semibold">
                    {el.title}
                  </h1>
                </Link>
                <p className="text-sm text-gray-500">{el.description}</p>
              </div>
              <AiOutlineEllipsis
                size={20}
                color="black"
                cursor="pointer"
                onClick={() => toggleDetails(el._id)}
              />
            </div>

            {DetailsProject === el._id && (
              <div className="absolute right-0 top-8 bg-white p-3 px-5 rounded-xl shadow-2xl z-10">
                <h1 className="text-start w-28 p-2 hover:bg-[#2e2ebf] hover:text-white cursor-pointer rounded-xl">
                  Edit
                </h1>
                <h1
                  className="text-start w-28 p-2 hover:bg-[#2e2ebf] hover:text-white cursor-pointer rounded-xl"
                  onClick={() => handleDeleteProduct(el._id)}
                >
                  Delete
                </h1>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AiFillDatabase size={12} color="#6a7282" />
                  <h1 className="text-gray-500 text-sm">Progress</h1>
                </div>
                <p className="text-gray-500 text-sm">0/{el.tasks.length}</p>
              </div>
              <div className="h-1 rounded-full w-full bg-[#d1d1d1]"></div>
            </div>
            <div className="bg-[#2e2ebf] p-2 w-32 text-center rounded-xl text-white mt-3">
              <h1 className="text-sm font-bold">{el?.categoryID?.Title}</h1>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProjectsRender;
