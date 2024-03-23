import { useState } from "react";
import { Avatar } from "./Avatar";
import { getRandomColor } from "../../utils/functions";

export const Username = ({ setUsername, setAvatar, avatar, setColor }) => {
  const [auxUsername, setAuxUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const saveUsername = (e) => {
    e.preventDefault();
    if (auxUsername.length >= 3 && auxUsername.length < 12) {
      const color = getRandomColor();
      setUsername(auxUsername);
      setColor(color);
      localStorage.setItem("username", auxUsername);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("color", color);
      setErrorMsg("")
    }else{
      setErrorMsg("Debe agregar usuario y debe ser menor a 12 caracteres")
    }
  };

  const handleUsername = (e) => {
    setErrorMsg("")
    setAuxUsername(e.target.value)
  }
  return (
    <>
      <div className="w-full h-full absolute z-30 backdrop-blur-[12px]"></div>
      <div className="bg-[--background-color] border-none absolute inset-0 mx-auto my-auto shadow-[0px_0px_17px_1px_#e7e7e7] animate-fadescale sm:w-[500px] sm:h-[290px] h-[270px] w-[95%] z-50 px-4 py-6 rounded-md">
        <h2 className="text-center font-bold text-lg text-[--main-color]">
          ¿Cuál es tu nombre de usuario?
        </h2>
        <form onSubmit={saveUsername} className="flex flex-col gap-y-8 relative">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className={`min-h-11 w-full focus-visible:outline-none border-2 rounded-3xl px-4 ${errorMsg ? 'border-red-600' : ""}`}
            onChange={handleUsername}
            autoComplete="off"
            pattern="\S+"
            title="No puede haber espacios"
          />
          {errorMsg ? <span className="absolute text-xs text-red-600 text-center w-full top-[45px]">{errorMsg}</span> : ""}
          <Avatar setAvatar={setAvatar} avatar={avatar} />
          <input
            type="submit"
            value="Guardar"
            className="px-4 py-2 bg-[--main-color] text-[--text-white-color] rounded-full cursor-pointer w-auto
          "
          />
        </form>
      </div>
    </>
  );
};
