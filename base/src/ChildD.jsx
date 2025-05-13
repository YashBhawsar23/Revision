import React from "react";
import { data } from "./App";

const ChildD = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return <h1>My Name is {name} </h1>;
        }}
      </data.Consumer>
    </>
  );
};

export default ChildD;
