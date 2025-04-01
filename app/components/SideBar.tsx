"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgDetailsMore, CgGoogleTasks } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import CheckUserCompoennt from "./CheckUserCompoennt";

const SideBar = () => {
  const pathName = usePathname();
  const [LinksDetails, setLinksDetails] = useState(false);

  const toggleLinksDetails = () => {
    setLinksDetails((prev) => !prev);
  };

  return (
    <>
      {pathName == "/login" || pathName == "/signup" ? null : (
        <>
          <div className="flex h-[100vh] max-sm:h-fit max-md:h-fit max-lg:h-fit max-xl:h-fit  flex-col justify-between items-center shadow-2xl p-10 max-sm:flex-row max-md:flex-row max-lg:flex-row">
            <div className="flex items-center">
              <CgGoogleTasks size={40} color="#2e2ebf" />
              <h1 className="text-[#2e2ebf] text-2xl font-bold">
                Task <span className="text-black">Master</span>
              </h1>
            </div>
            <div className="flex max-sm:hidden max-md:hidden max-lg:hidden  flex-col gap-3">
              <div className="active flex items-center gap-4 cursor-pointer">
                <RxDashboard className="text-xl" />
                <Link href={"/dashboard"} className="font-bold">
                  DashBoard
                </Link>
              </div>
              <div className="flex items-center gap-4 cursor-pointer p-2">
                <FaLaptopCode size={20} color="#2e2ebf" />
                <Link href={"/projects"} className="font-bold">
                  Projects
                </Link>
              </div>
              <div className="flex items-center gap-4 cursor-pointer p-2">
                <ImMenu size={20} color="#2e2ebf" />
                <Link href={"/categories"} className="font-bold">
                  Categories
                </Link>
              </div>
            </div>
            <div className="max-sm:hidden max-md:hidden max-lg:hidden ">
              <CheckUserCompoennt />
            </div>
            <div className="hidden max-sm:block" onClick={toggleLinksDetails}>
              <CgDetailsMore size={30} />
            </div>
          </div>
          {LinksDetails ? (
            <div className="px-10 bg-white  h-fit z-50 shadow-xl -my-5 flex flex-col gap-4">
              <Link href={"/dashboard"} onClick={() => setLinksDetails(false)}>
                DashBoard
              </Link>
              <Link href={"/projects"} onClick={() => setLinksDetails(false)}>
                Projects
              </Link>
              <Link href={"/categories"} onClick={() => setLinksDetails(false)}>
                Categories
              </Link>

              <CheckUserCompoennt />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default SideBar;
