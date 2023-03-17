import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import NotFound from './Pages/NotFound/NotFound';

import './App.scss';

const Layout = () => (
  <div className="app-container">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutUs />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
