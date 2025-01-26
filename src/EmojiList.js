import React from "react";
import Emoji from "./Emoji";

const EmojiList = () => {
  const emojis = ["😃", "😊", "😎", "😍", "🤩"];

  return (
    <div>
      <h1>Список смайликов</h1>
      <div className="emoji-list">
        {emojis.map((emoji, index) => (
          <Emoji key={index} emoji={emoji} />
        ))}
      </div>
    </div>
  );
};

export default EmojiList;
