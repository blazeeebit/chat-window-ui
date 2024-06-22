import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [chat, setChat] = useState([
    {
      author: "assistant",
      message: "Hey how are you",
    },
  ]);
  const [message, setMessage] = useState("");

  const onSetChat = () => {
    setChat((prev) => [...prev, { author: "user", message }]);
    setMessage("");
  };

  return (
    <div
      className="fixed
  right-10 bottom-10
  ">
      <div className="relative">
        {show && (
          <div
            className="
        absolute w-[400px]
        h-[600px] bg-white rounded-xl
        bottom-full right-full
        flex flex-col
        ">
            <div
              className="py-3 px-5 flex 
            items-center border-b-2 gap-3">
              <div
                className="
        w-10 h-10 rounded-full overflow-hidden
      "
                onClick={() => setShow((prev) => !prev)}>
                <img src="https://github.com/shadcn.png" alt="avatar" />
              </div>
              <h3
                className="text-black font-medium
              text-lg
              ">
                Letsfullstack
              </h3>
              <p className="">Account</p>
            </div>
            <div
              className="flex-1
            h-0 flex flex-col gap-3 overflow-auto py-5 
            px-3">
              {chat &&
                chat.length > 0 &&
                chat.map((messages, key) =>
                  messages.author === "user" ? (
                    <div
                      key={key}
                      className="bg-blue-500 w-6/12 
                    px-3 py-2 self-end rounded-xl">
                      <p>{messages.message}</p>
                    </div>
                  ) : (
                    <div
                      key={key}
                      className="bg-orange-500 w-6/12 
                    px-3 py-2 rounded-xl">
                      <p>{messages.message}</p>
                    </div>
                  )
                )}
            </div>
            <div className="border-t-2 py-2 flex">
              <input
                placeholder="Send a message"
                className="bg-white text-black
              border-none outline-none 
              ring-0 px-5 rounded-lg text-xl"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-black h-12 px-3
              rounded-lg
              "
                onClick={onSetChat}>
                Send
              </button>
            </div>
          </div>
        )}
        <div
          className="
        w-16 h-16 rounded-full overflow-hidden
      "
          onClick={() => setShow((prev) => !prev)}>
          <img src="https://github.com/shadcn.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default App;
