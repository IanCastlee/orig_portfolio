// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.scss";
import { IoSend } from "react-icons/io5";
import ppImage from "../../assets/icons/womanAI.jpg";
import { FiFilePlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { LuRefreshCcw } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

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
  const initialMessage = {
    role: "ai",
    text: "Hello! I’m Ian Castillo’s assistant. Ian is a website and mobile app developer from Bulusan, Sorsogon. He creates websites, mobile apps, and personal portfolios. How can I help you with your project today?",
  };
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (isTyping) return;
    if (!input.trim() && !imageData) return;

    if (input.trim()) {
      setMessages((prev) => [...prev, { role: "user", text: input }]);
    }
    if (imageData) {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          image: `data:${imageData.type};base64,${imageData.data}`,
        },
      ]);
    }

    setInput("");
    setImageData(null);
    setIsTyping(true);
    removeImagePreview();

    try {
      const genAI = getGenAI();

      let result;

      if (imageData) {
        // For images, simple model with description-only instruction
        const imageModel = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: `You are an AI assistant that ONLY describes images clearly and concisely in Filipino.  
Do NOT mention Ian Castillo or any unrelated info.  
After describing the image, add one interesting trivia related to what is shown in the image.  
Keep it short and friendly.`,
        });

        result = await imageModel.generateContent([
          {
            inlineData: {
              mimeType: imageData.type,
              data: imageData.data,
            },
          },
          {
            text: "Describe this image only and add a short, fun trivia related to it.",
          },
        ]);
      } else {
        // For text, use the full Ian assistant instruction
        const textModel = genAI.getGenerativeModel({
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

Rules for replies:
1. Always begin by introducing Ian and what he offers if it’s the first message or if the conversation context is missing.
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
          .map(
            (m) =>
              `${m.role === "user" ? "User" : "Assistant"}: ${m.text || ""}`
          )
          .join("\n");

        const prompt = `${conversation}\nUser: ${input}\nAssistant:`;

        result = await textModel.generateContent(prompt);
      }

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

    setIsTyping(false);
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1]; // remove data:image/png;base64, prefix
      setImageData({ data: base64, type: file.type });

      // Create preview URL for the selected file
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Add a function to remove preview
  const removeImagePreview = () => {
    setImageData(null);
    setImagePreview(null);
  };

  //refresh
  const handleRefresh = () => {
    setMessages([initialMessage]);
    setInput("");
    setImageData(null);
    setImagePreview(null);
    setConfirmationModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="chatbot-container"
    >
      <div className="heading">
        <div className="left">
          <img src={ppImage} alt="profile" />
          <span>Chat with Ian’s Assistant</span>
        </div>

        <div className="right">
          <LuRefreshCcw
            onClick={() => setConfirmationModal(true)}
            className="refresh"
          />
          <IoMdClose className="closeIcon" onClick={close} />
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message-wrapper ${msg.role}`}>
            {msg.role === "ai" && (
              <div className="ai-profile">
                <img className="ai-image" src={ppImage} alt="ai" />
                <span>Ian's Assistant</span>
              </div>
            )}
            <div className={`chat-message ${msg.role}`}>
              {msg.image && (
                <img src={msg.image} alt="Uploaded" className="chat-image" />
              )}
              {msg.text && <p>{msg.text}</p>}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message-wrapper ai">
            <div className="ai-profile">
              <img className="ai-image" src={ppImage} alt="ai" />
              <span>Ian's Assistant</span>
            </div>
            <div className="chat-message ai typing">
              <div className="dot-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        {imagePreview && (
          <div className="image-preview">
            <img className="imagePrev" src={imagePreview} alt="preview" />
            <CgClose onClick={removeImagePreview} className="closeIconImg" />
          </div>
        )}
        <div className="chat-input-wrapper">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <label
            htmlFor="image-upload"
            className="upload-icon"
            title="Upload Image"
          >
            <FiFilePlus className="uploadImage" />
          </label>

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
      {confirmationModal && (
        <div className="confirmation-overlay">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="confirmation-modal"
          >
            <p>
              Are you sure you want to refresh the chat? This will clear the
              current conversation.
            </p>

            <div className="bottom">
              <button onClick={handleRefresh} className="btn-yes">
                Yes, Refresh
              </button>
              <button
                onClick={() => setConfirmationModal(false)}
                className="btn-no"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Chatbot;
