"use client"; // 👈 This line makes the component a Client Component, indicating it runs on the client side (important in Next.js)

import useCheckUser from "@/Hooks/useCheckUser"; // Importing a custom hook to check user authentication status
import React from "react";

const User = () => {
  const { User } = useCheckUser(); // Use the custom hook to get the user details from the state or context

  return (
    <>
      <div className="flex items-center gap-5">
        {/* Display the user's name if the user is logged in, else display nothing */}
        <span>{User ? `,${User.user.userName}` : ""}</span>
        {User ? (
          <img
            src={User && User.user.Photo ? User.user.Photo : undefined}
            alt="profilePhoto"
            className="w-16 rounded-full object-cover"
          />
        ) : null}
      </div>
    </>
  );
};

export default User;
