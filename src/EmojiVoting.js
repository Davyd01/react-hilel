import React, { useState, useEffect } from "react";

const EmojiVoting = () => {
  const initialVotes = JSON.parse(localStorage.getItem("votes")) || {
    "😀": 0,
    "😊": 0,
    "😎": 0,
    "🤩": 0,
    "😍": 0,
  };

  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji] + 1,
    }));
  };

  const calculateWinner = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winnerEmoji = Object.keys(votes).find(
      (emoji) => votes[emoji] === maxVotes
    );
    setWinner(winnerEmoji);
  };

  const clearResults = () => {
    setVotes({
      "😀": 0,
      "😊": 0,
      "😎": 0,
      "🤩": 0,
      "😍": 0,
    });
    setWinner(null);
    localStorage.removeItem("votes");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Votes</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {Object.keys(votes).map((emoji) => (
          <div key={emoji} onClick={() => handleVote(emoji)} style={{ cursor: "pointer" }}>
            <span style={{ fontSize: "2rem" }}>{emoji}</span>
            <p>{votes[emoji]}</p>
          </div>
        ))}
      </div>
      <button onClick={calculateWinner} style={{ margin: "20px", padding: "10px 20px" }}>
        Show Results
      </button>
      <button onClick={clearResults} style={{ margin: "20px", padding: "10px 20px" }}>
        Clear results
      </button>
      {winner && (
        <div>
          <h2>Results</h2>
          <p>Winner</p>
          <span style={{ fontSize: "2rem" }}>{winner}</span>
        </div>
      )}
    </div>
  );
};

export default EmojiVoting;
