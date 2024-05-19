import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

const ContextProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [userToken, setUserToken] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  // const navigate = useNavigate();
  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   const token = localStorage.getItem("userToken");
  //   setUserToken(token);
  //   setUser(userInfo);
  //   if (!userInfo) navigate("/");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const ChatState = () => {
  return useContext(ChatContext);
};

export { ContextProvider, ChatState };
