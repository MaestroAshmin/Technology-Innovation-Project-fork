/*Slide component
Le Vy Cao 104201234
Last edited 14/09/2023*/
import React, { useState, useEffect } from 'react';
import '../Css/AboutUsSlide.css';

function AboutUs() {
  const slides = [
    {
      title: 'About Us',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
      title: 'Our Partner - Burnet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image:
        'https://www.burnet.edu.au/media/dx0d0g3p/burnet-hq-85-and-99-external-img_4466.png?width=1162&height=684&v=1d9c60aa4363990&format=webp&quality=100',
    },
    {
      title: 'Atomo Self-Test Kit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://live-production.wcms.abc-cdn.net.au/08e25729831dae3a2ed0f214f37fbff5?impolicy=wcms_crop_resize&cropH=573&cropW=1018&xPos=0&yPos=29&width=862&height=485',
    },
  ];
  
  

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch to the next slide after a certain time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow-container">
      <div className="prev" onClick={prevSlide}>
        &#10094; Previous
      </div>
      <div className="next" onClick={nextSlide}>
        Next &#10095;
      </div>
     
      {slides.map((slide, index) => (
  <div
    key={index}
    className={`slide ${index === currentSlide ? 'active' : ''}`}
  >
    <div className="slide-image">
      <img height="500px"src={slide.image} alt={slide.title} />
    </div>
    <div className="slide-content">
      <h2>{slide.title}</h2>
      <p>{slide.content}</p>
    </div>
  </div>
))}


    </div>
  );
}

export default AboutUs;
