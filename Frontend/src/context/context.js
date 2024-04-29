import { createContext, useState } from "react";

export const valContext = createContext(null);

export const ContextProvider = (props) => {
  const [data, setData] = useState();
  return (
    <valContext.Provider value={{ data, setData }}>
      {props.children}
    </valContext.Provider>
  );
};
