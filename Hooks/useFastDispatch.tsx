"use client";

import { AppDispatch } from "@/Store/Store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFastDispatch = (Fun: (...rest: any) => void) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(Fun);
  }, []);
};

export default useFastDispatch;
