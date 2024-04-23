import { useEffect, useRef, useState } from "react";
import MessageItem from "../MessageItem/MessageItem";
import { getRandomColor, getTime } from "../../utils/functions";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_URL_BACKEND);
const Chat = ({ username }) => {
  const chatContainer = useRef(null);
  const [messages, setMessages] = useState([
    {
      content: "Hola, bienvenido al chat",
      user: "Bot1",
      time: getTime(),
      avatar: "1.webp",
      color: getRandomColor()
    },
    {
      content: "Puedes chatear con las personas que estén en linea",
      user: "Bot2",
      time: getTime(),
      avatar: "2.webp",
      color: getRandomColor()
    },
  ]);

  useEffect(() => {
    chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  return (
    <>
    <div className="absolute inset-0 bg-[url('/img/background.webp')] bg-center h-[100%] opacity-10 bg-fixed -z-10"></div>
      <section className="relative sm:h-[74dvh] h-[91dvh] overflow-hidden">
        <h1 className="bg-[--main-color] px-3 text-[--text-white-color] font-bold h-10 flex items-center justify-center">Chat grupal</h1>
        <ul
          ref={chatContainer}
          className="flex flex-col sm:h-[70dvh] h-[85dvh] overflow-y-scroll scroll-smooth pt-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#23d09729 white",
          }}
        >
          {messages.map((message, index) => (
            <li key={index} className="w-full">
              <MessageItem message={message} username={username} />
            </li>
          ))}
        </ul>
      </section>
      
    </>
  );
};

export default Chat;
