import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Socket } from "socket.io-client"; // Import Socket type from socket.io-client
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface MessageData {
  room: string;
  author: string;
  message: string;
  time: string;
}

interface Props {
  socket: Socket; 
  username: string;
  room: string;
}

const Chat: React.FC<Props> = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<MessageData[]>([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData: MessageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: MessageData) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window flex-col justify-content-center justify-items-center align-items-center">
      <div className="chat-header" style={{marginBottom:'16px'}}>
        <p className="text-3xl" style={{textAlign:'center'}}>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              className="message"
              id={username === messageContent.author ? "you" : "other"}
              key={index}
            >
              <div style={{width:'auto'}}>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer" style={{marginTop:'42px'}}>
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button className="Send-Button btn btn-dark flex flex-row custom-btn" type="submit" onClick={()=>{sendMessage()}}>Send
          <span style={{marginLeft:"5px"}}>
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
          </button>
      </div>
    </div>
  );
};

export default Chat;
