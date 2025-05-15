function PostList({ posts, onDelete, onEdit }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          <button onClick={() => onEdit(post)}>✏️ Edit</button>
          <button onClick={() => onDelete(post.id)}>🗑 Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
