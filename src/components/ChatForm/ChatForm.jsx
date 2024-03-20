import { useState } from "react";
import { getTime } from "../../utils/functions";
import { io } from "socket.io-client";
import { SendIcon } from "../Icons/Icons";
const socket = io(import.meta.env.VITE_URL_BACKEND);

const ChatForm = ({ username }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage != "") {
      const bodymessage = {
        content: newMessage,
        user: username,
        time: getTime(),
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
      className="flex w-[95%] m-auto z-20 relative gap-x-1.5"
    >
      <input
        className="min-h-11 w-full focus-visible:outline-none border-2 rounded-3xl px-4"
        type="text"
        placeholder="Escribe tu mensaje"
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
      />
      <button className="p-4 bg-[--main-color] text-white block rounded-full">
        <SendIcon />
      </button>
    </form>
  );
};

export default ChatForm;
