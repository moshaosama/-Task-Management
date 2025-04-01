"use client"; // 👈 مهم جدًا!

import { Store } from "@/Store/Store";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}
