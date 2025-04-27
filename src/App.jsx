// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import PostsPage from './components/posts/PostsPage';
import PostDetail from './pages/PostDetail';
import { PostsProvider } from './contexts/PostsContext';
import { AlertProvider } from './contexts/AlertContext'; // Import AlertProvider
import Alert from './components/Alert'; // Import Alert componente
import './App.css';

const App = () => {
  return (
    <AlertProvider> {/* Wrappiamo nell'AlertProvider */}
      <PostsProvider> {/* Wrappiamo anche nel PostsProvider */}
        <BrowserRouter>
          <Alert /> {/* Mostriamo sempre l'Alert sopra */}
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
    </AlertProvider>
  );
};

export default App;
