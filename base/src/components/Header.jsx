import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <header style={{ background: "#ddd", padding: "10px" }}>
        {user ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button onClick={logout} style={{ marginLeft: "10px" }}>
              Logout
            </button>
          </>
        ) : (
          <span>Please log in</span>
        )}
      </header>
    </>
  );
};

export default Header;
