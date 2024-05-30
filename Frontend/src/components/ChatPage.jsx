import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "./Chatbox";
import MyChats from "./MyChats";
import SideDrawer from "./miscellaneous/SideDrawer";
import { ChatState } from "../context/ContextProvider";
import SideNav from "./navigation/SideNav";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <>
      <div>
        <SideNav />
        <main className="content ml-12 transition-all ease-in-out duration-500 ">
          <div className="h-16" />
          {/* Your main content starts here */}
          <div style={{ width: "100%" }}>
            <SideDrawer />
            <Box
              display="flex"
              justifyContent="space-between"
              w="100%"
              h="91.5vh"
              p="10px"
            >
              <MyChats />

              <Chatbox />
            </Box>
          </div>

          {/* Your main content ends here */}
        </main>
      </div>
    </>
  );
};

export default ChatPage;