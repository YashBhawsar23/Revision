import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (post) => {
    const
  }

  return <></>;
};

export default App;
