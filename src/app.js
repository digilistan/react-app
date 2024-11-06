import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists and is properly styled
import Header from './components/header'; // Check casing
import Footer from './components/footer';
import HomePage from './components/Pages/homePage';
import AboutPage from './components/Pages/aboutPage';
import ServicesPage from './components/Pages/servicesPage';
import PortfolioPage from './components/Pages/portfolioPage';
import TestimonialPage from './components/Pages/testimonialPage';
import ContactPage from './components/Pages/contactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

// import Services from './components/services';


function App(){
    return(
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/portfolio" element={<PortfolioPage/>}/>
                <Route path="/testimonial" element={<TestimonialPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path='*' element={<AboutPage/>}/>
            </Routes>
        <Footer/>
    </BrowserRouter>
    )
}
export default App;