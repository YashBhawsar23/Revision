import React, { useState } from "react";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <>
      {loggedIn ? (
        <>
          <h2>Welcome, Yash</h2>
          <button onClick={handleLogin}>Log Out</button>
        </>
      ) : (
        <>
          <h2>Please Log In</h2>
          <button onClick={handleLogin}>Log In</button>
        </>
      )}
    </>
  );
};

export default Login;
