export const Avatar = ({ setAvatar, avatar }) => {
  const avatarlist = [
    { name: "1.webp" },
    { name: "2.webp" },
    { name: "3.webp" },
    { name: "4.webp" },
    { name: "5.webp" },
  ];
  const handleSelectAvatar = (img) => {
    setAvatar(img.name);
  };
  return (
    <div className="flex justify-around">
      {avatarlist.map((img, index) => (
        <figure key={index} className="cursor-pointer sm:w-16 sm:h-16 w-12 h-12">
          <img
            className={`sm:w-16 sm:h-16 w-12 h-12 outline outline-4 outline-offset-2 rounded-full  duration-200 ${
              avatar === img.name
                ? "outline-[--main-color]"
                : "outline-[--opacity-color-text]"
            }`}
            src={`/avatar/${img.name}`}
            alt="avatar chat"
            onClick={() => handleSelectAvatar(img)}
            loading="eager"
          />
        </figure>
      ))}
    </div>
  );
};
