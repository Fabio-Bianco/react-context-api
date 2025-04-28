// src/contexts/PostsContext.jsx

// 📦 Importiamo React, gli hooks e axios
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// 📦 Creiamo il Context
const PostsContext = createContext();

// 🚀 Creiamo il Provider
export function PostsProvider({ children }) {
  // Stati per i dati
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🎯 Funzione per caricare i dati (senza async/await)
  function fetchPosts() {
    setLoading(true);
    console.log('📡 Partita la richiesta dei posts...');

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log('✅ Posts ricevuti:', response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('❌ Errore durante il fetch dei posts:', error);
      })
      .finally(() => {
        setLoading(false);
        console.log('🏁 Fine caricamento posts');
      });
  }

  // 🎯 useEffect per caricare i dati appena il componente si monta
  useEffect(() => {
    fetchPosts();
  }, []);

  // 🚀 Forniamo i dati a tutti i figli
  return (
    <PostsContext.Provider value={{ posts, loading }}>
      {children}
    </PostsContext.Provider>
  );
}

// 🚀 Hook personalizzato per leggere il context
export function usePostsContext() {
  return useContext(PostsContext);
}
