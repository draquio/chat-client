const MessageItem = (props) => {
  const { message, username } = props;
  return (
    <div
      className={`max-w-[80%] w-fit min-w-[100px] mx-4 mb-1 pr-9 pl-4 rounded-xl relative ${
        message.user === username
          ? "float-right text-[--text-white-color] bg-[--main-color] rounded-br-none"
          : "rounded-tl-none bg-[--opacity-color-text] text-[--text-dark-color]"
      }`}
    >
      <div className="py-2">
        {message.user !== username && (
          <p className="mb-[-4px] font-bold ">{message.user}</p>
        )}
        <p className="">{message.content}</p>
        <span className="absolute z-10 bottom-0 right-2 text-xs">
          <small>{message.time}</small>
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
