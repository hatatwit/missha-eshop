import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [jwt, setJwt] = useState(null);

  return (
    <UserContext.Provider value={{jwt, setJwt}}>
      {props.children}
    </UserContext.Provider>
  );
};