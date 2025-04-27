// src/pages/PostDetail.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './PostDetail.css'; // Importiamo il CSS

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentId = Number(id);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("❌ Errore nel fetch:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  // Funzioni di navigazione
  const goToPreviousPost = () => {
    navigate(`/posts/${currentId - 1}`);
  };

  const goToNextPost = () => {
    navigate(`/posts/${currentId + 1}`);
  };

  const goBackToPosts = () => {
    navigate('/posts');
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={goToPreviousPost}>◀ Post Precedente</button>
        <button className="nav-button" onClick={goToNextPost}>Post Successivo ▶</button>
      </div>

      {/* Bottone "Torna ai Post" */}
      <div className="back-button-container">
        <button className="nav-button back-button" onClick={goBackToPosts}>
          ⬅ Torna ai Post
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
