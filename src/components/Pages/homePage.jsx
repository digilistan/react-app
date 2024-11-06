import React from 'react';
import Header from '../header';
import Hero from '../hero';
import AboutUs from '../about';
import Services from '../services';
import Portfolio from '../portfolio';
import Testimonial from '../testimonials';
import Contact from '../contact';
import Footer from '../footer';

function HomePage() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
        </>
    );
}

export default HomePage;
