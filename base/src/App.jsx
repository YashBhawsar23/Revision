import React, { useState } from "react";
import Basic from "./Basic";
import ChildD from "./ChildD";
import { createContext } from "react";

const data = createContext();

const App = () => {
  const name = "Yash";
  return (
    <>
      <h1>Context API</h1>
      <data.Provider value={name}>
        <ChildD />
      </data.Provider>
    </>
  );
};

export default App;
export { data };
