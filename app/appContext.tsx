import React, { createContext, useState, useContext, useEffect } from "react";
import { initializeSocket, sendMessageOnSocket } from "./helper";

interface AppContextType {
  sharedData: any;
  setSharedData: (value: any) => void;
}

// Create the context with an initial default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a custom hook for easier access
export const useAppContext = () => useContext(AppContext);

// Create the provider component
export const AppProvider = ({ children }) => {
  const socket = initializeSocket();
  const [sharedData, setSharedData] = useState({
    message: "Hello from Context!",
    socket: socket,
  });
  useEffect(() => {
    // Listen for events
    socket.on("message", (message: any) => {
      //@ts-ignore
      console.log(message);
      setSharedData({ message: JSON.parse(message), socket });
    });

    // sendMessageOnSocket(socket, "test1", "fdmsaod");

    return () => {
      socket.disconnect(); // Clean up on component unmount
    };
  }, []);

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
};
