import React from "react";
import { Outlet } from "react-router-dom";

export default function SecondPage() {
  return (
    <>
      <p>This is second page</p>
      <Outlet />
    </>
  );
}
