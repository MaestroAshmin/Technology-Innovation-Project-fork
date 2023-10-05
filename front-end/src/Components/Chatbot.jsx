import React, { useState } from 'react';
import '../Css/Chatbot.css'; // Import your CSS file for styling

import axios from '../api/axios';

function Chatbot() {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputMessage, setInputMessage] = useState(''); // State to store user input

  // Function to handle user input and add it to messages
  const handleUserInput = async (e) => {
    e.preventDefault();

    if (inputMessage.trim() === '') {
      return; // Don't add empty messages
    }

    try {
      // Make a POST request to the API with the input message
      const response = await axios.post('http://localhost:8000/api/chat', {
        question: inputMessage, // Assuming your API expects a 'question' field
      });

      // Assuming your API responds with the message
      const receivedMessage = response.data.message;

      // Update the messages state to include the user message and the bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, type: 'user' },
        { text: receivedMessage, type: 'bot' },
      ]);

      // Clear the input field
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle errors, e.g., show an error message to the user
    }
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
