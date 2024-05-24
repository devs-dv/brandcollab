import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "./Chatbox";
import MyChats from "./MyChats";
import SideDrawer from "./miscellaneous/SideDrawer";
import { ChatState } from "../context/ContextProvider";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
       <SideDrawer />
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        <MyChats  />
    
          <Chatbox  />
        
      </Box>
    </div>
  );
};

export default ChatPage;