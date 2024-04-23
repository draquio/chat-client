import {useState } from "react";
import { getTime } from "../../utils/functions";
import { io } from "socket.io-client";
import { SendIcon } from "../Icons/Icons";
const socket = io(import.meta.env.VITE_URL_BACKEND);

const ChatForm = ({ username, avatar, color, backendavailable }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage != "") {
      const bodymessage = {
        content: newMessage,
        user: username,
        time: getTime(),
        avatar: avatar,
        color: color
      };
      if (username.length !== 0) {
        socket.emit("message", bodymessage);
        setNewMessage("");
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[95%] m-auto z-20 relative gap-x-1.5 mt-1"
      autoComplete="off"
    >
      <input
        className="min-h-11 w-full focus-visible:outline-none border-2 rounded-3xl px-4 disabled:bg-[whitesmoke]"
        type="text"
        placeholder={!backendavailable ? "Un segundo, el servidor está encendiendo.." : "Escribe tu mensaje"}
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
        autoComplete="off"
        disabled={!backendavailable}

      />
      <button title="Enviar mensaje" id="enviar" aria-label="Enviar" className="p-4 bg-[--main-color] text-[--text-white-color] block rounded-full">
        <SendIcon />
      </button>
    </form>
  );
};

export default ChatForm;
