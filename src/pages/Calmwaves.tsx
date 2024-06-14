import React, { useState } from 'react';
import Card from '../components/Cparts/Cards';

const Calmwaves = () => {
  const playlistArray = [
    {
      index: 1,
      img: 'https://imgs.search.brave.com/A1wa8bR2rZ15ujYbCGSOvrUlZL2aGo3S9Ow-TaioHoQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/NS8xNS8wNy8zMC9t/aW5kZnVsbmVzcy01/MTcyNjM3XzY0MC5q/cGc',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 1,
      img: 'https://imgs.search.brave.com/ikdZVOPa1D7R6vpZry4nSU-WcteDsPU64erlup8a0tQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC81LzQvOC8x/NDk4MTIzLW1pbmQt/cmVsYXhpbmctd2Fs/bHBhcGVycy0xOTIw/eDEwODAtZm9yLXNh/bXN1bmcuanBn',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 1,
      img: 'https://imgs.search.brave.com/OX9X7Ap3fRZjN2Q_f7DSc4ypM4Bg28FSrfAJYwDEvSU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8xMC85/MC96bkNndG0uanBn',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 1,
      img: 'https://imgs.search.brave.com/Mquw2MI9pSRXEhDna-o6VdpxpYXW75YudsS0FD6XFbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OC84/Mi9PV2hHZk4uanBn',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 1,
      img: 'https://imgs.search.brave.com/voRvFanGB8xa7gby_YpsJSGS1ujUZAZCV0sSf3NmXXk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS83Ni85/OC9JTGJSeU8uanBn',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 1,
      img: 'https://imgs.search.brave.com/kCZcnNdF30xZrJInbnbsc5Y8CMsQLugqfLBGx_JtCa8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC9iL2YvMi8x/NDk4MDg4LWxhcmdl/LW1pbmQtcmVsYXhp/bmctd2FsbHBhcGVy/cy0xOTIweDEwODAt/aGlnaC1yZXNvbHV0/aW9uLmpwZw',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 1,
      img: 'https://imgs.search.brave.com/AGl-MELm7X_pl7gHuZqvjwmZbGzhCTmiZyiz1FhoJfs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8xLzU2/L01SSjN1QS5qcGc',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 1,
      img: 'https://imgs.search.brave.com/qnLsFf5mFSJHHucpJmEUfAi_zH4L-X_9pKvLJnbIqAY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FsbXNhZ2UuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA0L2NhbG1pbmct/aW1hZ2UtZm9yLWFu/eGlldHkuanBn',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
   ];

  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  const handleCardClick = (audioSrc: string) => {
    setCurrentAudio(audioSrc);
  };

  return (
    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px',marginTop:'23px' }}>
      {playlistArray.map((item) => (
        <div key={item.index} className="col-sm-6 col-md-4 col-lg-2 mb-4">
          <Card imgSrc={item.img} onClick={() => handleCardClick(item.audio)} />
          {currentAudio === item.audio && (
            <audio controls>
              <source src={item.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </div>
  );
};

export default Calmwaves;
