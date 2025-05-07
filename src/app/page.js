import React from 'react';
import '../styles/globals.css';
import '../styles/homePage.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

export default function HomePage() {
  return (
    <div className='HomePage'>
      <Navbar />
      Hello
      <Footer />
    </div>
  )
}