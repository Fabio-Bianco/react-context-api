// src/pages/PostDetail.jsx

import { usePostsContext } from "../contexts/PostsContext";
import { useParams, useNavigate } from "react-router-dom";
import "./PostDetail.css"; // 👈 Import del CSS corretto!

const PostDetail = () => {
  const { posts, loading } = usePostsContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const currentId = Number(id);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  const post = posts.find(p => p.id === currentId);

  if (!post) {
    return <p>❌ Post non trovato.</p>;
  }

  // Funzioni per navigare
  const goToPreviousPost = () => {
    navigate(`/posts/${currentId - 1}`);
  };

  const goToNextPost = () => {
    navigate(`/posts/${currentId + 1}`);
  };

  const goBackToPosts = () => {
    navigate("/posts");
  };

  // Troviamo l'ID minimo e massimo nei posts
  const minId = Math.min(...posts.map(p => p.id));
  const maxId = Math.max(...posts.map(p => p.id));

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className="navigation-buttons">
        <button 
          className="nav-button" 
          onClick={goToPreviousPost} 
          disabled={currentId === minId} // 👈 Disabilita se siamo al primo post
        >
          ◀ Post Precedente
        </button>
        <button 
          className="nav-button" 
          onClick={goToNextPost} 
          disabled={currentId === maxId} // 👈 Disabilita se siamo all'ultimo post
        >
          Post Successivo ▶
        </button>
      </div>

      <div className="back-button-container">
        <button className="nav-button back-button" onClick={goBackToPosts}>
          ⬅ Torna ai Post
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
