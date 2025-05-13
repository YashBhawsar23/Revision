import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main>{user ? <Dashboard /> : <Login />}</main>
    </>
  );
};

export default App;
