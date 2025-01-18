import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    emojis: [
      { id: 1, emoji: "🌟", votes: 0 },
      { id: 2, emoji: "🚀", votes: 0 },
      { id: 3, emoji: "🍕", votes: 0 },
      { id: 4, emoji: "🏖️", votes: 0 },
      { id: 5, emoji: "🐶", votes: 0 },
    ],
    winner: null,
  };
  

  handleVote = (id) => {
    const updatedEmojis = this.state.emojis.map((emoji) =>
      emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
    );
    this.setState({ emojis: updatedEmojis });
    localStorage.setItem("emojiVotes", JSON.stringify(updatedEmojis));
  };

  handleShowResults = () => {
    const winner = this.state.emojis.reduce((prev, current) =>
      current.votes > prev.votes ? current : prev
    );
    this.setState({ winner });
  };

  handleClearResults = () => {
    const clearedEmojis = this.state.emojis.map((emoji) => ({
      ...emoji,
      votes: 0,
    }));
    this.setState({ emojis: clearedEmojis, winner: null });
    localStorage.removeItem("emojiVotes");
  };

  componentDidMount() {
    const savedVotes = localStorage.getItem("emojiVotes");
    if (savedVotes) {
      this.setState({ emojis: JSON.parse(savedVotes) });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Emoji Voting</h1>
        <div className="emoji-list">
          {this.state.emojis.map((emoji) => (
            <div
              key={emoji.id}
              className="emoji-item"
              onClick={() => this.handleVote(emoji.id)}
            >
              <span className="emoji">{emoji.emoji}</span>
              <span className="votes">{emoji.votes} votes</span>
            </div>
          ))}
        </div>
        <button onClick={this.handleShowResults}>Show Results</button>
        <button onClick={this.handleClearResults}>Clear Results</button>
        {this.state.winner && (
          <div className="winner">
            <h2>Winner: {this.state.winner.emoji}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
