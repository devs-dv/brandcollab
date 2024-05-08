import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const valContext = createContext(null);

export const ContextProvider = ({children}) => {
  const [data, setData] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [userToken, setUserToken] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = localStorage.getItem("userToken");
    setUserToken(token);
    setUser(userInfo);

    if (!userInfo) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const navigate = useNavigate();
  return (
    <valContext.Provider
      value={{
        data,
        setData,
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
    </valContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(valContext);
};

