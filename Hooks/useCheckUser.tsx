"use client"; // تأكد من أن هذا هو أول سطر

import { useEffect, useState } from "react";

type UserType = {
  user: {
    userName: string;
  };
};

const useCheckUser = () => {
  const [User, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // قم بجلب المستخدم فقط عندما يكون الكود يعمل على العميل
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      setUser(storedUser);
    }
  }, []);

  return { User };
};

export default useCheckUser;
