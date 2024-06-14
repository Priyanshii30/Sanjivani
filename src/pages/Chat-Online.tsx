import "./Chatbit.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io("http://localhost:3001");

function ChatOnline() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="ChatOnline" style={{width:'82vw',height:'45vh',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',justifyItems:'center'}}>
      {!showChat ? (
        <div className="joinChatContainer" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',justifyItems:'center'}} >
          <h3 className="font-weight-bold">Chat Online</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatOnline;