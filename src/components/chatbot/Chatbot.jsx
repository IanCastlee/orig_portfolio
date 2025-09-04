// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.scss";
import { IoCloseSharp, IoSend } from "react-icons/io5";
import ppImage from "../../assets/project_images/profile.jpg";

// List of API keys
const apiKeys = [
  import.meta.env.VITE_GEMINI_API_KEY_1,
  import.meta.env.VITE_GEMINI_API_KEY_2,
];

let currentKeyIndex = 0;
function getGenAI() {
  return new GoogleGenerativeAI(apiKeys[currentKeyIndex]);
}

function Chatbot({ close }) {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I’m Ian Castillo’s assistant. Ian is a website and mobile app developer from Bulusan, Sorsogon. He creates websites, mobile apps, and personal portfolios. How can I help you with your project today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);

    try {
      const genAI = getGenAI();
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: `... your systemInstruction rules here ...`,
      });

      const conversation = messages
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");

      const prompt = `${conversation}\nUser: ${input}\nAssistant:`;

      const result = await model.generateContent(prompt);
      const aiResponse = result.response.text();

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);

      if (error.message.includes("429")) {
        if (currentKeyIndex < apiKeys.length - 1) {
          currentKeyIndex++;
          return handleSend();
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "ai",
              text: "🚫 All API keys reached their quota. Please try again tomorrow.",
            },
          ]);
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: "Sorry, something went wrong. Please try again.",
          },
        ]);
      }
    }

    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="heading">
        <div className="left">
          <img src={ppImage} alt="profile" />
          <span>Chat with Ian’s Assistant</span>
        </div>
        <IoCloseSharp onClick={close} />
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.role}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>
          <IoSend className="sendIcon" />
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
