"use client";

import Link from "next/link";
import React from "react";
import { CgGoogleTasks } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { PiSignOutBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

const SideBar = () => {
  return (
    <div className="flex h-[100vh] flex-col justify-between shadow-2xl p-10">
      <div className="flex items-center">
        <CgGoogleTasks size={40} color="#2e2ebf" />
        <h1 className="text-[#2e2ebf] text-2xl font-bold">
          Task <span className="text-black">Master</span>
        </h1>
      </div>
      <div className="flex flex-col gap-3">
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
      <div className="flex items-center gap-3 mb-24 cursor-pointer">
        <PiSignOutBold size={20} color="#2e2ebf" />
        <h1>SignOut</h1>
      </div>
    </div>
  );
};

export default SideBar;
