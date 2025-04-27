// src/components/posts/PostsPage.jsx

import PostsList from './PostsList';
import { useEffect } from 'react';
import { useAlertContext } from '../../contexts/AlertContext'; // Importiamo l'AlertContext

const PostsPage = () => {
  const { showAlert } = useAlertContext(); // Usiamo showAlert

  useEffect(() => {
    console.log("🔥 Entrato in PostsPage");
    showAlert("✅ Posts caricati correttamente!", "success"); // Mostriamo alert
  }, []); // Solo al mount della pagina

  return (
    <section>
      <h1>📰 I nostri Post</h1>
      <PostsList />
    </section>
  );
};

export default PostsPage;
