// src/contexts/PostsContext.jsx

import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// 1️⃣ Creiamo il contesto
const PostsContext = createContext();

// 2️⃣ Creiamo il Provider che gestisce i dati
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Funzione per fare fetch dei posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      console.log("✅ Posts caricati nel context:", response.data); // Log per vedere i dati caricati
      setLoading(false);
    } catch (error) {
      console.error('❌ Errore durante il fetch dei posts:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("📡 Avvio fetch dei posts...");
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading }}>
      {children}
    </PostsContext.Provider>
  );
};

// 3️⃣ Hook personalizzato per leggere i dati facilmente
export const usePostsContext = () => {
  return useContext(PostsContext);
};
