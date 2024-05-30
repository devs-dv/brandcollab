import React from "react";
import SideNav from "./navigation/SideNav";

const CollabOngoing = () => {
  return (
    <>
      <div>
        <SideNav />
        <main className="content ml-12 transition-all ease-in-out duration-500 ">
          <div className="h-16" />
          {/* Your main content starts here */}
          <div>CollabOngoing</div>

          {/* Your main content ends here */}
        </main>
      </div>
    </>
  );
};

export default CollabOngoing;
