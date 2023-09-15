/*chatbot component 
Le Vy Cao 104201234
Last edited 15/09/2023*/
import React, { useState } from 'react';
import '../Css/Chatbot.css'; // Import your CSS file for styling

function Chatbot() {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputMessage, setInputMessage] = useState(''); // State to store user input

  // Function to handle user input and add it to messages
  const handleUserInput = (e) => {
    e.preventDefault();
  
    if (inputMessage.trim() === '') {
      return; // Don't add empty messages
    }
  
    // Add user message to messages
    setMessages((prevMessages) => [...prevMessages, { text: inputMessage, type: 'user' }]);
    setInputMessage('');
  
    // Simulate a bot response after a short delay
    setTimeout(() => {
      const botResponse = { text: 'This is a bot response.', type: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">Ask the bot to answer your questions</div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserInput} className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
