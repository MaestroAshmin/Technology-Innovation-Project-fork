/*services page
Justin Li 104138316
Last edited 21/09/2023*/
import React, { useState, useEffect } from 'react';
import '../Css/Services.css';
import Header from '../Components/ServicesHeader';
import Image from '../Components/ServicesImage';
import List from '../Components/ServicesList';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

function ServicesPage() {
  const [testingServices, setTestingServices] = useState([]);
  const [supportServices, setSupportServices] = useState([]);

  //replace with API endpoint
  useEffect(() => {
    //placeholders
    const fakeTestingServices = ['Service 1', 'Service 2', 'Service 3'];
    const fakeSupportServices = ['Support 1', 'Support 2', 'Support 3'];

    setTestingServices(fakeTestingServices);
    setSupportServices(fakeSupportServices);
  }, []);

  return (
  <div className = 'page'>
    <Navbar />
    <div className="services">
      <div className='topRow'>
      <div className="top">
        <Image />
      </div>
      <div className="top">
        <Header />
      </div>
      </div>
      <div className='bottomRow'>
      <div className="bottom">
        <List title="HIV Testing Services" items={testingServices} />
      </div>
      <div className="bottom">
        <List title="HIV Support Services" items={supportServices} />
      </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default ServicesPage;
