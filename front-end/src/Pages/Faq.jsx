/*FAQ page
Le Vy Cao 104201234
Last edited 15/09/2023*/
import React from 'react';
import Navbar from '../Components/Navbar';
import FAQ from '../Components/FAQ'; 
import Footer from '../Components/Footer';
import Chatbot from '../Components/Chatbot';


function FaqPage() {
  return (
    <div className="faq-page">
      <Navbar />
      <FAQ />
      <Chatbot/>
      <Footer />
    </div>
  );
}

export default FaqPage;
