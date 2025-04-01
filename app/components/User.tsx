"use client"; // 👈 أضف هذا السطر لجعل المكون Client Component

import useCheckUser from "@/Hooks/useCheckUser";
import React from "react";

const User = () => {
  const { User } = useCheckUser();

  return (
    <>
      <div>
        <span>{User ? `,${User.user.userName}` : ""}</span>
      </div>
    </>
  );
};

export default User;
