import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_URL_BACKEND);
export const Sidebar = ({ username }) => {
  const [userlist, setUserList] = useState([]);
  useEffect(() => {
    socket.on("users updated", (updatedUsers) => {
      const newuserlist = updatedUsers.filter((user) => user !== null);
      const uniqueUsers = new Set([...userlist, ...newuserlist]);
      setUserList([...uniqueUsers]);
    });
    socket.emit("login", username);
    return () => {
      socket.off("users updated");
    };
  }, [username]);
  return (
    <aside className="bg-[whitesmoke] hidden sm:block">
      <h3 className="font-bold text-center bg-[--main-color] h-10 flex justify-center items-center text-[--text-white-color]">
        Usuarios conectados
      </h3>
      <div className="flex flex-col justify-between h-[95%]">
        <ul className="p-3">
          {userlist.map((user, index) => (
            <li className="text-base" key={index}>
              <span className="bg-[rgb(239_239_239)] p-2 text-[--text-dark-color] w-full block rounded-sm py-2 mt-1 hover:bg-[rgb(228_228_228)] cursor-pointer duration-300">
                {user}
              </span>
            </li>
          ))}
        </ul>
        <a href="https://draquioportfolio.vercel.app/" target="_blank" title="Desarrollado por Sergio Mercado" className="p-3 text-center text-[#727272]">© Sergio Mercado (Draquio) | Fullstack Developer</a>
      </div>
    </aside>
  );
};
