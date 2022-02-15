import React, { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../contexts/ChatContext";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages((prev) => [...prev, { message,fromMe:true }]);
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatForm;
