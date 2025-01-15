import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MainBot.css';
import OpenAI from "openai";
import axios from 'axios';

const OpenAIKEY = import.meta.env.VITE_REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: OpenAIKEY, dangerouslyAllowBrowser: true });

const MainBot = () => {
  const [messages, setMessages] = useState([{ role: "system", content: "You are a helpful assistant." }]);
  const [userInput, setUserInput] = useState('');
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      const initialUserMessage = { role: "user", content: query };
      setMessages(prevMessages => [...prevMessages, initialUserMessage]);

      // Send the initial user message to the chatbot
      const fetchResponse = async () => {
        const response = await axios.post('http://localhost:5000/api/chat', initialUserMessage);
        const completion = await openai.chat.completions.create({
          messages: [...messages, initialUserMessage],
          model: "gpt-4"
        });

        const botMessage = completion.choices[0].message;
        setMessages(prevMessages => [...prevMessages, botMessage]);
        await axios.post('http://localhost:5000/api/chat', botMessage);
      };

      fetchResponse();
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    const userMessage = { role: "user", content: userInput };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setUserInput('');

    await axios.post('http://localhost:5000/api/chat', userMessage);

    const completion = await openai.chat.completions.create({
      messages: newMessages,
      model: "gpt-4"
    });

    const botMessage = completion.choices[0].message;
    setMessages([...newMessages, botMessage]);

    await axios.post('http://localhost:5000/api/chat', botMessage);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.filter(m => m.role !== "system").map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="input-field"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default MainBot;
