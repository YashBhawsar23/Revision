import React, { useState } from "react";

const Basic = () => {
  const namesArray = ["Yash", "Priya", "Amit", "Sneha", "Rahul", "Anjali"];
  const [searchTerm, setSearchTerm] = useState("");
  const [foundName, setFoundName] = useState(null);

  const handleSearch = () => {
    const nameFound = namesArray.find(
      (name) => name.toLowerCase() === searchTerm.toLowerCase()
    );
    setFoundName(nameFound || "Name not found");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Search a Name</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>
      <div style={{ marginTop: "20px" }}>
        {foundName && <p>Result: {foundName}</p>}
      </div>
    </div>
  );
};

export default Basic;
