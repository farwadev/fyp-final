import React from 'react';
// import navbar
import Navbar from '../components/navbar';
import Info from '../components/info';
// import footer
import Footer from '../components/footer';

function About(props) {
    return (
        <div>
            <Navbar/>
            <Info/>  
            <Footer/>
        </div>
    );
}

export default About;