import React from 'react';

interface CardProps {
  imgSrc: string;
  title?: string;
  buttonText?: string;
  onClick?: () => void;
}

const Cards: React.FC<CardProps> = ({ imgSrc, title, buttonText, onClick }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imgSrc} alt={title} style={{borderRadius:'23px'}}/>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button
          className="btn btn-primary"
          onClick={onClick}
          style={{
            background: 'skyblue',
            padding: '8px 24px',
            marginTop: '8px',
            border: '2px solid cadetblue',
            borderRadius: '10px'
          }}
        >
          Play
        </button>

      </div>
    </div>
  );
};

export default Cards;