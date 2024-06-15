import React from 'react';
import './div.css';

function App() {
  return (
    <div className="App">
      <Container
        title="Chatbot"
        description="Interact with our AI-powered chatbot for any assistance you need."
        buttonText="Open Chatbot"
      />
      <Container
        title="Diet"
        description="Get personalized diet plans and nutritional advice."
        buttonText="View Diet Plan"
      />
      <Container
        title="Calm Music"
        description="Listen to soothing music to relax and calm your mind."
        buttonText="Play Music"
      />
      <Container
        title="Game"
        description="Play fun and engaging games to pass the time."
        buttonText="Start Game"
      />
      <Container
        title="Yoga Postures"
        description="Learn and practice different yoga postures for better health."
        buttonText="View Yoga Postures"
      />
    </div>
  );
}


interface ContainerProps {
  title: string;
  description: string;
  buttonText: string;
}

const Container: React.FC<ContainerProps> = ({ title, description, buttonText }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Container;


