import { useState } from "react";

export const Username = (props) => {
  const { setUsername } = props;
  const [auxUsername, setAuxUsername] = useState("");
  const saveUsername = (e) => {
    e.preventDefault();
    if (setAuxUsername) {
      setUsername(auxUsername);
      localStorage.setItem("username", auxUsername);
    }
  };
  return (
    <div className="bg-slate-400 p-4 ">
      <h2>¿Cuál es tu nombre de usuario?</h2>
      <form onSubmit={saveUsername}>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setAuxUsername(e.target.value)}
        />
        <input type="button" value="Guardar" />
      </form>
    </div>
  );
};
