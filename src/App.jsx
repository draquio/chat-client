import { useEffect, useState } from "react";
import "./App.css";
import { Username } from "./components/username/Username";
import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);
  return (
    <main>
      {!username && <Username setUsername={setUsername} />}
      <div className="h-screen justify-center flex flex-col max-w-[1000px] m-auto">
        <div className="grid sm:grid-cols-[250px_auto] sm:min-h-[80dvh] min-h-screen shadow-[0px_0px_19px_2px_#00000042;]">
          <Sidebar />
          <div className="relative">
            <Chat username={username} setUsername={setUsername} />
            <ChatForm username={username} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
