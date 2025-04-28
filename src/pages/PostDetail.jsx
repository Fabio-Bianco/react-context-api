import { usePostsContext } from "../contexts/PostsContext";
import { useParams, useNavigate } from "react-router-dom";

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

      <div className="back-button-container">
        <button className="nav-button back-button" onClick={goBackToPosts}>
          ⬅ Torna ai Post
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
