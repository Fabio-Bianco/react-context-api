// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import PostsPage from './components/posts/PostsPage';
import PostDetail from './pages/PostDetail';
import { PostsProvider } from './contexts/PostsContext'; // Importiamo il Provider
import './App.css';

const App = () => {
  return (
    <PostsProvider> {/* Wrappiamo tutta l'app nel provider */}
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="chi-siamo" element={<ChiSiamo />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
};

export default App;

