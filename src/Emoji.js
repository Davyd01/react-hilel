import React, { useState } from "react";

const Emoji = ({ emoji }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="emoji-container">
      <span className="emoji" onClick={handleClick}>
        {emoji}
      </span>
      <p className="emoji-count">Кликов: {clickCount}</p>
    </div>
  );
};

export default Emoji;
