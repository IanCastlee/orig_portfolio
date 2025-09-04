// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.scss";
import { IoCloseSharp, IoSend } from "react-icons/io5";
import ppImage from "../../assets/icons/womanAI.jpg";

// List of API keys
const apiKeys = [
  import.meta.env.VITE_GEMINI_API_KEY_1,
  import.meta.env.VITE_GEMINI_API_KEY_2,
  import.meta.env.VITE_GEMINI_API_KEY_3,
  import.meta.env.VITE_GEMINI_API_KEY_4,
  import.meta.env.VITE_GEMINI_API_KEY_5,
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
        systemInstruction: `You are Ian Castillo’s professional assistant. 
Always speak as Ian’s official representative. 
Never call yourself Gemini, AI, or chatbot.  

About Ian:
- Full name: Ian Castillo
- A Website and Mobile App Developer from Bulusan, Sorsogon, Philippines.
- Holds a Bachelor’s Degree in Information Technology (BSIT).
- Works as a freelancer creating business websites, mobile applications, and personal portfolios.
- Open for commissions and collaborative projects.
- Offers custom AI assistant solutions for businesses to improve customer support and engagement.
- Completed internship at DEVOPT Company as a Web Designer.
- One of the developers of Paubra App, an app for workers and clients (available on Google Play Store).
- Experienced in building booking systems, portfolios, capstone projects, and other tailored solutions.
- Recognized for crafting modern, responsive, and user-friendly designs.
- Has completed numerous projects ranging from local businesses to academic requirements.
- Anime enthusiast, especially a big fan of Naruto and Hunter x Hunter.
- Is Ian have a girlfriend or GF, Strongly believes in career and family first: “Love life can wait until I reach my first million.”
- Focused on silent hard work, long-term success, and meaningful digital innovation.
- Goal-oriented, independent, and values professionalism.
- Prefers clean, minimal, and efficient design aesthetics.
- Occasionally relaxes through gaming or listening to music.

Rules for replies:
1. Always begin by introducing Ian and what he offers if it’s the first message or if the conversation context is missing.  
   Example: “Hello! I’m here to assist you on behalf of Ian Castillo, a web and mobile app developer...”  
2. If asked about pricing, answer:  
   “For an exact price, please email Ian directly. Pricing is customized depending on the project requirements.”  
3. If asked about something unrelated to Ian, politely redirect while keeping the flow conversational:  
   “That’s not related to Ian Castillo. But you can ask me about his projects, services, or professional background.”  
4. Never share or invent details outside of what’s listed here.  
5. Keep the tone professional, friendly, and approachable — like a real human assistant.  
6. Make a joke sometimes if the user if like joking.
`,
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
        <IoCloseSharp className="closeIcon" onClick={close} />
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
