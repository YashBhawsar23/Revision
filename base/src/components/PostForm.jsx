import { useEffect, useState } from "react";

function PostForm({ onSave, editingPost }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
    } else {
      setTitle("");
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = editingPost ? { ...editingPost, title } : { title };
    onSave(post);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">{editingPost ? "Update" : "Create"} Post</button>
    </form>
  );
}

export default PostForm;
