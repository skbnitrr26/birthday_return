import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

const ITEMS = ['🍾', '🥂', '🍗', '🍖', '🍧', '🍔', '🥟', '🥤', '🍹', '🍕', '📍', '🍩', '🍚'];

function App() {
  const [reels, setReels] = useState(['🎁', '🎁', '🎁']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showError, setShowError] = useState(false);

  const spin = () => {
    setIsSpinning(true);
    setShowError(false);
    
    // Simulate spinning effect
    let spinCount = 0;
    const interval = setInterval(() => {
      setReels([
        ITEMS[Math.floor(Math.random() * ITEMS.length)],
        ITEMS[Math.floor(Math.random() * ITEMS.length)],
        ITEMS[Math.floor(Math.random() * ITEMS.length)],
      ]);
      spinCount++;
      
      if (spinCount > 20) {
        clearInterval(interval);
        finishSpin();
      }
    }, 250);
  };

  const finishSpin = () => {
    // The "Rigged" result
    setReels(['🚫', '🚫', '🚫']);
    setIsSpinning(false);
    setShowError(true);
    
    // Confetti for the "Return Gift"
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="container">
      <h1>🎂Birthday Return Gift! By Me (Sumit)</h1>
      <p>Spin to win a free Tech Support service from your favorite engineer!</p>

      <div className="slot-machine">
        {reels.map((symbol, index) => (
          <div key={index} className="reel">{symbol}</div>
        ))}
      </div>

      <button 
        className="spin-button" 
        onClick={spin} 
        disabled={isSpinning}
      >
        {isSpinning ? 'SPINNING...' : 'SPIN FOR YOUR GIFT! 🎰'}
      </button>

      {showError && (
        <div className="error-box">
  <h2>⚠️ Sorry, Koi Gift Nahi Hai...👎</h2>
  <p><b>Reason:</b> Mood Nahi Hai Abhi, But tension not! 😅</p>
  <hr />
  <h3>🎁 YOUR REWARD:</h3>
  <p style={{fontSize: '1.2rem'}}>
    "Sab tension side pe, ab bas enjoy karo!" 🎉 <br/>
    <b>Return Gift:</b> Good vibes & smiles with special hug! 😊
  </p>
  <p><i>(Thanks Again! Sabhi ko..)</i></p>
</div>
      )}
      
      <p style={{marginTop: '40px', fontSize: '0.8rem', color: '#888'}}>
        Developed by your favorite Software Engineer Sumit❤️ 👨‍💻
      </p>
    </div>
  );
}

export default App;
