import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

import HomePage from './Pages/HomePage/HomePage';
import FilterPage from './Pages/FilterPage/FilterPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AboutPage from './Pages/AboutPage/AboutPage';

// Componente que maneja la lógica de renderización
const AppContent = () => {
  const location = useLocation();
  const is404 = !['/', '/about'].includes(location.pathname) && 
                !location.pathname.startsWith('/filter/') && 
                !location.pathname.startsWith('/details/');
  
  if (is404) {
    return <ErrorPage />;
  }
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter/:especie" element={<FilterPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
