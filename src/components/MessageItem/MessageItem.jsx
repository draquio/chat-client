const MessageItem = (props) => {
  const { message, username } = props;
  return (
    <>
      {username !== message.user ? (
        <div className="flex items-start mx-1 gap-x-1">
          <img src={`/avatar/${message.avatar}`} alt="avatar" height={24} width={24} />
          <div className="max-w-[80%] w-fit min-w-[100px] mb-1 pr-9 pl-4 rounded-xl relative rounded-tl-none bg-[--opacity-color-text] text-[--text-dark-color]">
            <div className="py-2">
              <p
                className="mb-[-4px] font-bold"
                style={{ color: message.color }}
              >
                {message.user}
              </p>
              <p className="break-all">{message.content}</p>
              <span className="absolute z-10 bottom-0 right-2 text-xs">
                <small>{message.time}</small>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[80%] w-fit mx-1 min-w-[100px] mb-1 pr-9 pl-4 rounded-xl relative float-right text-[--text-white-color] bg-[--main-color] rounded-br-none">
          <div className="py-2">
            <p className="break-all">{message.content}</p>
            <span className="absolute z-10 bottom-0 right-2 text-xs">
              <small>{message.time}</small>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageItem;
