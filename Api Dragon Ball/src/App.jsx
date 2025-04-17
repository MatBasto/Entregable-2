import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

import HomePage from './Pages/HomePage/HomePage';
import FilterPage from './Pages/FilterPage/FilterPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AboutPage from './Pages/AboutPage/AboutPage';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filter/:especie" element={<FilterPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
