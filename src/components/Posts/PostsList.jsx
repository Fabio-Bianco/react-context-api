// src/components/posts/PostsList.jsx

import PostCard from './PostCard';
import { usePostsContext } from '../../contexts/PostsContext';
import './PostsList.css'; // Importiamo il CSS!!

const PostsList = () => {
  console.log("📃 PostsList renderizzato");

  const { posts, loading } = usePostsContext();

  if (loading) {
    return <p>Caricamento posts...</p>;
  }

  return (
    <div className="posts-grid">
      {posts.map(post => (
        <PostCard 
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default PostsList;
