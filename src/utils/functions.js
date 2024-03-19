
export const getTime = () => {
    const date = new Date();
      const hour = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const formatedtime = `${hour}:${minutes}`;
      return formatedtime;
}