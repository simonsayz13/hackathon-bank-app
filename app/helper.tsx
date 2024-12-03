import { io } from "socket.io-client";

export const createMessageData = (screen: string, button: string) => {
  return { sender: "admin-adminid", screen, button };
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
  button: string
) => {
  console.log(socket, screen, button);
  socket.emit("message", createMessageData(screen, button));
};
