/*FAQ component
Le Vy Cao 104201234
Last edited 15/09/2023*/
import React, { useState, useEffect } from 'react';
import '../Css/FAQ.css'

function FAQ() {
  // Initialize the state to store the FAQ data received from the database
  const [faqData, setFaqData] = useState([]);

  // Simulate fetching FAQ data from the database using an effect
  useEffect(() => {
    // Replace this with your actual API call to fetch FAQ data
    // Example: fetch('your-api-endpoint').then(response => response.json()).then(data => setFaqData(data));
    // For now, we'll use a static array as a placeholder
    const fetchedData = [
      {
        id: 1,
        question: 'How does it work?',
        answer:
          'The Atomo HIV Self Test is a small cartridge that contains a test strip. The test is a finger prick blood test that only needs a small amount of blood, and the result will be provided in 15 minutes.',
      },
      {
        id: 2,
        question: 'How Accurate is the test?',
        answer:
          'The Atomo HIV Self Test has been shown in laboratory testing to correctly identify 99.6% of HIV negative and HIV positive samples. Like other HIV tests, the Atomo HIV Self Test may not detect HIV that is recently acquired. For the Atomo HIV Self Test, the window period is three months. This means that the test may not detect HIV that has been acquired in the last three months. If you think you have been exposed to HIV in the last three months, it is important to speak to a doctor or visit a sexual health clinic.',
      },
      {
        id: 3,
        question: 'What happens if I get a positive result?',
        answer:
          'The Atomo HIV Self Test is a very accurate screening test. Because it is a screening test, getting a positive result does not necessarily mean you have HIV. If you have received a positive result on the self-test, it will still need to be confirmed with further testing by a doctor. You can refer to the support links on this site, or as detailed in the care card that is included in the test. If you receive a positive result with the follow-up testing, it is important that you speak to a doctor about starting treatment. HIV is a manageable condition, treatment today is very effective, and those living with HIV are able to live long and healthy lives.',
      },
      {
        id: 4,
        question: 'How many times can the device be used?',
        answer: 'The Atomo HIV Self Test is a single-use screening test. You can use it only once, and it must be disposed of after use.',
      },
      {
        id: 5,
        question: 'How to dispose of the test afterwards?',
        answer:
          'Place the test and all box contents into the discreet disposal bag provided with the test. The bag can then be sealed and thrown away with household rubbish.',
      },
      // Add more FAQ items as needed
    ];
    setFaqData(fetchedData);
  }, []);

  // Initialize the state to manage the open/closed state of each FAQ item
  const [openItems, setOpenItems] = useState([]);

  // Function to toggle the open/closed state of an FAQ item
  const toggleItem = (id) => {
    if (openItems.includes(id)) {
      // If the item is open, close it
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      // If the item is closed, open it
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((item) => (
          <li key={item.id} className={`faq-item ${openItems.includes(item.id) ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleItem(item.id)}>
              {openItems.includes(item.id) ? <i class="fa-solid fa-minus"></i> :<i class="fa-solid fa-plus"></i>}{item.question}
            </div>
            {openItems.includes(item.id) && <div className="faq-answer">{item.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
