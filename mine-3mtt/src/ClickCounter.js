import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);
  const LIMIT = 10;

  const increase = () => {
    if (count < LIMIT) {
      setCount(prev => prev + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      
      <button onClick={increase} style={{ marginRight: '10px' }}>
        Increase
      </button>
      
      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>

      {count === LIMIT && (
        <p style={{ color: 'red', marginTop: '20px' }}>
          You've reached the limit!
        </p>
      )}
    </div>
  );
}

export default ClickCounter;
