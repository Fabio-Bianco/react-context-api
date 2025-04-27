// src/components/posts/PostCard.jsx

import { Link } from 'react-router-dom';

const PostCard = ({ id, title, body }) => {
  console.log(`🃏 PostCard renderizzato per il post con id: ${id}`);

  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>Leggi di più →</Link>
    </div>
  );
};

export default PostCard;
