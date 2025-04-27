// src/components/posts/PostCard.jsx

import { Link } from 'react-router-dom';

const PostCard = ({ id, title, body }) => {
  console.log(`🃏 PostCard renderizzato per il post con id: ${id}`); // Log utile

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px"
    }}>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Leggi di più →</Link>
    </div>
  );
};

export default PostCard;
