import { useEffect, useState } from "react";
import "./App.css";
import { Username } from "./components/username/Username";
import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Verify from "./components/Verify/Verify";

function App() {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState();
  const [color, setColor] = useState("");
  const [backendavailable, setBackendAvailable] = useState(false);
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setAvatar(localStorage.getItem("avatar") || "1.webp");
    setColor(localStorage.getItem("color"));
  }, [backendavailable]);
  return (
    <main>
      <Verify setBackendAvailable={setBackendAvailable} />
      {!username && <Username setUsername={setUsername} setAvatar={setAvatar} setColor={setColor} avatar={avatar} />}
      <div className="h-[100dvh] justify-center flex flex-col max-w-[1000px] m-auto">
        <div className="grid sm:grid-cols-[250px_auto] sm:h-[80dvh] h-[100dvh] shadow-[0px_0px_19px_2px_#00000042]">
          <Sidebar username={username} avatar={avatar} color={color} />
          <div className="relative">
            <Chat username={username} setUsername={setUsername} />
            <ChatForm username={username} avatar={avatar} color={color} backendavailable={backendavailable}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
