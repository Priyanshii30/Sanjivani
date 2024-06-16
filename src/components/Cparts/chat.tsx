import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const openChat = () => {
  window.open('http://localhost:5000', '_blank'); // Ensure 'http://' is included
};

const ChatButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', width: '100vw' }}>
      <Button
      variant="contained" endIcon={<SendIcon />}
        style={{
          color: "white",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "20px",
          margin: "0 10px"
        }}
        onClick={openChat}
      >
        ChatBot
      </Button>
    </div>
  );
};

export default ChatButton;
