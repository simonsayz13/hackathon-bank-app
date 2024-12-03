import { io } from "socket.io-client";

export const createMessageData = (
  screenId: string,
  componentId?: string,
  complete?: boolean
) => {
  return { sender: "customer", screenId, componentId, complete };
};

export const initializeSocket = () => {
  const socket = io("http://10.23.1.23:8080"); // Replace with your server URL
  return socket;
};

export const disconnectSocket = (socket: any) => {
  socket.disconnect(); // Clean up on component unmount
};

export const sendMessageOnSocket = (
  socket: any,
  screen: string,
  componentId?: string,
  complete?: boolean
) => {
  socket.emit("message", createMessageData(screen, componentId, complete));
};
