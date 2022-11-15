import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  children,
  nested_view,
}: {
  children?: JSX.Element;
  nested_view?: boolean;
}): JSX.Element {
  // Check for authentication status using auth0 sdk here
  const is_authenticated = false;

  // Handle either redirection to login page or showing a login button to redirect to login page here
  if (!is_authenticated) {
    return nested_view ? (
      <p>Show login button here</p>
    ) : (
      <Navigate to="/login" replace />
    );
  }
  return children ? children : <Outlet />;
}
