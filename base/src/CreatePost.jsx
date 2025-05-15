import React, { useEffect, useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

  return (
    <>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};

export default CreatePost;
