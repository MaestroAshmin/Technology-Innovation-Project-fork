import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Css/Instructions.css'; // Import your CSS file for styling

function Instructions() {
  // Initialize the state to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState('english'); // Default to English

  // Define content for each language
  const content = {
    english: (
      <div className="instructions">
        <h1>Instructions</h1>
        <h2>Step 1: Purchase the self-testing kit</h2>
        <p>The Atomo HIV Self Test has been shown in laboratory testing to correctly identify 99.6% (1757 of 1764) of unique HIV-negative samples (known as the test's specificity).</p>
        <button className="orderButton"><a href="https://atomohivtest.com/home.php">Order Here</a></button>
        <h2>Step 2: Watch the video to learn</h2>
        <video controls width="400" height="300">
          <source src="https://video.wixstatic.com/video/2f33ee_e9579025ca334874b5c5dbf77663ae4c/360p/mp4/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>You can also learn from the instructions </p>
        <a id="link" href="https://atomohivtest.com/ARST-OA-001_Atomo_HIV_ST_Galileo_Platform_IFUArtwork_TGA_rev_7_Web_Version.pdf">Click to view</a>
      </div>
    ),
    chinese: (
      <div className="instructions">
        <h1>使用说明</h1>
        <h2>步骤1：购买自测套件</h2>
        <p>Atomo HIV自测套件在实验室测试中表明，可以正确识别99.6%（1757个中的1757个）的HIV阴性样本（称为测试的特异性）。</p>
        <button className="orderButton"><a href="https://atomohivtest.com/home.php">在这里订购</a></button>
        <h2>步骤2：观看视频学习</h2>
        <video controls width="400" height="300">
          <source src="https://video.wixstatic.com/video/2f33ee_e9579025ca334874b5c5dbf77663ae4c/360p/mp4/file.mp4" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
        <p>您也可以通过查看说明书进行学习</p>
        <a id="link" href="https://atomohivtest.com/ARST-OA-044-02_AtomoHIV_ST_TGA_IFU-Chinese_Web.pdf">点击查看</a>
      </div>
    ),
    spanish: (
      <div className="instructions">
        <h1>Instrucciones</h1>
        <h2>Paso 1: Compra el kit de autoprueba</h2>
        <p>La Prueba de Autodiagnóstico del VIH Atomo ha demostrado en pruebas de laboratorio que identifica correctamente el 99.6% (1757 de 1764) de las muestras únicas de VIH negativo (conocida como la especificidad de la prueba).</p>
        <button className="orderButton"><a href="https://atomohivtest.com/home.php">Ordenar Aquí</a></button>
        <h2>Paso 2: Mira el video para aprender</h2>
        <video controls width="400" height="300">
          <source src="https://video.wixstatic.com/video/2f33ee_e9579025ca334874b5c5dbf77663ae4c/360p/mp4/file.mp4" type="video/mp4" />
          Tu navegador no admite la reproducción de videos.
        </video>
        <p>También puedes aprender consultando las instrucciones</p>
        <a id="link" href="https://atomohivtest.com/ARST-OA-045-02_Atomo_HIV_ST_TGA_IFU%E2%80%93Spanish_Web.pdf">Haz clic para ver</a>
      </div>
    ),
    
  };

  // Function to handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (<>
    <div className="instructions-page">
      {/* Display the content based on the selected language */}
      {content[selectedLanguage]}
      <div className="language-buttons">
        <p>Choose buttons to switch languages</p>
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('spanish')}>Spanish</button>
      </div>
    </div>
  </>
  );
}

export default Instructions;
