"use client";

import useCheckUser from "@/Hooks/useCheckUser";
import Link from "next/link";
import React from "react";
import { PiSignOutBold } from "react-icons/pi";

const CheckUserCompoennt = () => {
  const { User } = useCheckUser();
  const handleSignout = () => {
    window.localStorage.removeItem("user");
  };
  return (
    <>
      {User ? (
        <Link href={"/signup"}>
          <div
            className="flex items-center gap-3 mb-24 cursor-pointer"
            onClick={handleSignout}
          >
            <PiSignOutBold size={20} color="#2e2ebf" />

            <h1>SignOut</h1>
          </div>
        </Link>
      ) : (
        <Link href={"/login"}>
          <div className="flex items-center gap-3 mb-24 cursor-pointer">
            <PiSignOutBold size={20} color="#2e2ebf" />

            <h1>SignIn</h1>
          </div>
        </Link>
      )}
    </>
  );
};

export default CheckUserCompoennt;
