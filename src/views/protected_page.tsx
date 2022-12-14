import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedPage() {
  const { logout } = useAuth0();
  return (
    <>
      <p>This is a protected page</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </>
  );
}
