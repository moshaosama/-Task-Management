"use client"; // Indicating this is a client-side component (likely for Next.js)

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgDetailsMore, CgGoogleTasks } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import CheckUserComponent from "./CheckUserCompoennt"; // Fixed typo here

const SideBar = () => {
  const pathName = usePathname(); // Get the current pathname to conditionally render the sidebar
  const [LinksDetails, setLinksDetails] = useState(false); // State for toggling the visibility of links in the sidebar

  // Function to toggle visibility of sidebar links on small screens
  const toggleLinksDetails = () => {
    setLinksDetails((prev) => !prev); // Flip the state between true and false to toggle the links
  };

  return (
    <>
      {/* Check if the current path is not login/signup to display the sidebar */}
      {pathName == "/login" || pathName == "/signup" ? null : (
        <>
          {/* Main sidebar container */}
          <div className="flex h-[100vh] max-sm:h-fit max-md:h-fit max-lg:h-fit max-xl:h-fit flex-col justify-between items-center shadow-2xl p-10 max-sm:flex-row max-md:flex-row max-lg:flex-row">
            {/* Sidebar logo and title */}
            <div className="flex items-center">
              <CgGoogleTasks size={40} color="#2e2ebf" />
              <h1 className="text-[#2e2ebf] text-2xl font-bold">
                Task <span className="text-black">Master</span>
              </h1>
            </div>

            {/* Sidebar links visible on larger screens */}
            <div className="flex max-sm:hidden max-md:hidden max-lg:hidden flex-col gap-3">
              {/* Dashboard Link */}
              <div className="active flex items-center gap-4 cursor-pointer">
                <RxDashboard className="text-xl" />
                <Link href={"/dashboard"} className="font-bold">
                  DashBoard
                </Link>
              </div>

              {/* Projects Link */}
              <div className="flex items-center gap-4 cursor-pointer p-2">
                <FaLaptopCode size={20} color="#2e2ebf" />
                <Link href={"/projects"} className="font-bold">
                  Projects
                </Link>
              </div>

              {/* Categories Link */}
              <div className="flex items-center gap-4 cursor-pointer p-2">
                <ImMenu size={20} color="#2e2ebf" />
                <Link href={"/categories"} className="font-bold">
                  Categories
                </Link>
              </div>
            </div>

            {/* CheckUserComponent handles displaying SignIn/SignOut options */}
            <div className="max-sm:hidden max-md:hidden max-lg:hidden">
              <CheckUserComponent />
            </div>

            {/* Button for toggling the visibility of links on small screens */}
            <div className="hidden max-sm:block" onClick={toggleLinksDetails}>
              <CgDetailsMore size={30} />
            </div>
          </div>

          {/* Dropdown links for small screens */}
          {LinksDetails ? (
            <div className="px-10 bg-white h-fit z-50 shadow-xl -my-5 flex flex-col gap-4">
              {/* Dashboard Link */}
              <Link href={"/dashboard"} onClick={() => setLinksDetails(false)}>
                DashBoard
              </Link>

              {/* Projects Link */}
              <Link href={"/projects"} onClick={() => setLinksDetails(false)}>
                Projects
              </Link>

              {/* Categories Link */}
              <Link href={"/categories"} onClick={() => setLinksDetails(false)}>
                Categories
              </Link>

              {/* CheckUserComponent to show SignIn/SignOut */}
              <CheckUserComponent />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default SideBar;
