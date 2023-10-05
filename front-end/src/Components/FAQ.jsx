import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import '../Css/FAQ.css'

function FAQ() {
  const [faqData, setFaqData] = useState([]);
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    // Use Axios to fetch data from the specified URL
    axios.get('http://localhost:8000/api/listFaq')
      .then((response) => {
        // Assuming the API returns an array of FAQ items
        setFaqData(response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  const toggleItem = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((item) => (
          <li key={item.faq_id} className={`faq-item ${openItems.includes(item.faq_id) ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleItem(item.faq_id)}>
              {openItems.includes(item.faq_id) ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}{item.question}
            </div>
            {openItems.includes(item.faq_id) && <div className="faq-answer">{item.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
