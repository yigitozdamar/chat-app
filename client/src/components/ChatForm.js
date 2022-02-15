import React, { useState } from "react";
import styles from "./styles.module.css";

const ChatForm = () => {
  const [messages, setMessages] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messages)
    setMessages("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.textInput}
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatForm;
