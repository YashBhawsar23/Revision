import React, { useEffect, useState } from "react";

const Basic = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Rendered");
  }, [count]);

  return (
    <>
      <h2>The Count is : {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </>
  );
};

export default Basic;
