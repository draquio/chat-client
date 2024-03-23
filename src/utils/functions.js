export const getTime = () => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formatedtime = `${hour}:${minutes}`;
  return formatedtime;
};

export const getRandomColor = () => {
  const colors = [
    { color: "#f5c002" },
    { color: "#23d097" },
    { color: "#EB455F" },
    { color: "#891652" },
    { color: "#387ADF" },
    { color: "#5d876c" },
    { color: "#86B6F6" },
  ];
  const indexRandom = Math.floor(Math.random() * colors.length);
  return colors[indexRandom].color;
};

export const verifyServer = async () => {
  const url = `${import.meta.env.VITE_URL_BACKEND}ping`
  try {
    const respuesta = await fetch(url);
    if (respuesta.ok) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};