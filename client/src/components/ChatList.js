import React from "react";
import { useChat } from "../contexts/ChatContext";
import ChatItem from "./ChatItem";
import styles from "./styles.module.css";

const ChatList = () => {
  const { messages } = useChat();
  console.log(messages);

  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
