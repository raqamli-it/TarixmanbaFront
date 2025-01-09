import { Route, Routes, Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import Layout from './Layout';
import Home from './assets/Page/Home';
import LibraryCatigory from './assets/Page/LibraryCatigory';
import Login from './assets/Page/Login';
import News from './assets/Page/News';
import AboutUs from './assets/Page/AboutUs';
import ShablonManba from './assets/Page/Shablon';
import Shablon from './assets/Page/Shablon';
import LibraryCategoryDetail from './assets/Page/LibraryCatigoryDeteyl';
import CardDeteil from './assets/Page/CardDeteil';
import Register from './assets/Page/Register';
import NotFound from './assets/Page/NotFound';
import ScrollToTop from './assets/Components/component/ScrollTutop';
import NewsDetail from './assets/Page/NewsDetail';
import Search from './assets/Page/Search';

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const parsedToken = JSON.parse(token);
      if (parsedToken.expiry > new Date().getTime()) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Agar autentifikatsiya bo'lgan bo'lsa, foydalanuvchini "/" ga yo'naltiradi */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login setAuth={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/news" Component={News} />
          <Route path="/news/:id" Component={News} />
          <Route path="/library-categories/" Component={LibraryCatigory} />
          <Route path="/libraryDetail/:id" Component={LibraryCategoryDetail} />
          <Route path="/cardDetail/:id" Component={CardDeteil} />
          <Route path="/sources/:type/:id" Component={Shablon} />
          <Route path="/news/newsDetail/:id" Component={NewsDetail} />
          <Route path="/aboutus" Component={AboutUs} />
          <Route path="/search" Component={Search} />
        </Route>
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
