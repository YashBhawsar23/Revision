import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <input
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
