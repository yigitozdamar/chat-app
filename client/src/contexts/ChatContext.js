import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { message: "selam" },
    { message: "naber" },
  ]);
  const values = {
    messages,
    setMessages,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

// export default ChatContext; custom hook kullanmayacaksak bu şekilde export edip kullanıyoruz

export const useChat = () => useContext(ChatContext);
