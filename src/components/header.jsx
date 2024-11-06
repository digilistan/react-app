import React from "react";
import { Outlet, Link } from "react-router-dom";
import AboutPage from "./Pages/aboutPage";
import ServicesPage from "./Pages/servicesPage";
import PortfolioPage from "./Pages/portfolioPage";
import TestimonialPage from "./Pages/testimonialPage";
import ContactPage from "./Pages/contactPage";
import HomePage from "./Pages/homePage";
function Header(){
    return(
        <>
          <header className="text-gray-600 body-font bg-gradient-to-tr from-blue-50 to-blue-100">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="/assets/logo.svg" alt="logo" />
              </a>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 cursor-pointer hover:text-gray-900">Home</Link>
                    <Link to="/about" className="mr-5 cursor-pointer hover:text-gray-900">About</Link>
                    <Link to="/services" className="mr-5 cursor-pointer hover:text-gray-900">Services</Link>
                    <Link to="/portfolio" className="mr-5 cursor-pointer hover:text-gray-900">Portfolio</Link>
                    <Link to="/testimonial" className="mr-5 cursor-pointer hover:text-gray-900">Testimonials</Link>
                    <Link to="/contact" className="mr-5 cursor-pointer hover:text-gray-900">Contact Us</Link>
                </nav>
              <button className="inline-flex items-center bg-blue-900 shadow-xl text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 ">Contact US
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </header>
        </>
    )
}
export default Header;