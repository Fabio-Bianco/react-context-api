// src/pages/Posts.jsx

import { usePostsContext } from "../contexts/PostsContext"; // 👈 Importiamo l'hook personalizzato
import { Link } from "react-router-dom";

const Posts = () => {
  // Prendiamo posts e loading dal context
  const { posts, loading } = usePostsContext();

  return (
    <div>
      <h1>Posts</h1>
      <p>Benvenuto nella pagina dei post!</p>

      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
