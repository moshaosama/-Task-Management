"use client"; // Indicating this is a client-side component (likely for Next.js)

import useCheckUser from "@/Hooks/useCheckUser"; // Importing custom hook to check user authentication status
import Link from "next/link"; // Import Link from Next.js for navigation between pages
import React from "react"; // Import React for JSX usage
import { PiSignOutBold } from "react-icons/pi"; // Import sign-out icon from react-icons

const CheckUserCompoennt = () => {
  // Destructure `User` from `useCheckUser` hook
  const { User } = useCheckUser();

  // Handle sign-out by removing user data from localStorage
  const handleSignout = () => {
    window.localStorage.removeItem("user");
  };

  return (
    <>
      {/* Conditional rendering based on whether the user is authenticated */}
      {User ? (
        // If user exists, show "SignOut" link
        <Link href={"/signup"}>
          <div
            className="flex items-center gap-3 mb-24 cursor-pointer"
            onClick={handleSignout} // Sign-out function on click
          >
            {/* Sign-out icon */}
            <PiSignOutBold size={20} color="#2e2ebf" />
            <h1>SignOut</h1>
          </div>
        </Link>
      ) : (
        // If no user is found (not authenticated), show "SignIn" link
        <Link href={"/login"}>
          <div className="flex items-center gap-3 mb-24 cursor-pointer">
            {/* Sign-in icon */}
            <PiSignOutBold size={20} color="#2e2ebf" />
            <h1>SignIn</h1>
          </div>
        </Link>
      )}
    </>
  );
};

export default CheckUserCompoennt;
