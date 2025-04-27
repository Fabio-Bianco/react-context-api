// src/components/posts/PostsList.jsx

import PostCard from './PostCard';
import { usePostsContext } from '../../contexts/PostsContext'; // Importiamo il context

const PostsList = () => {
  console.log("📃 PostsList renderizzato"); // Debug per capire quando si carica

  // Recuperiamo posts e loading dal context
  const { posts, loading } = usePostsContext();

  console.log("📦 Posts ricevuti dal context:", posts); // Aggiunto log per vedere i dati live

  if (loading) {
    return <p>Caricamento posts...</p>;
  }

  return (
    <div>
      {/* Mappiamo i post per creare tante PostCard */}
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
