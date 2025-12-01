import { useState, useRef } from "react";

export default function MemoryGame() {
  const emojis = ["🐶", "⭐", "❤️", "⚽", "🍕"];
  const sequenceRef = useRef([]);

  const [message, setMessage] = useState("Click START to play");
  const [currentStep, setCurrentStep] = useState(0);

  const startGame = () => {
    const newSequence = [
      emojis[Math.floor(Math.random() * emojis.length)],
      emojis[Math.floor(Math.random() * emojis.length)],
      emojis[Math.floor(Math.random() * emojis.length)],
    ];

    sequenceRef.current = newSequence; // store in ref
    setCurrentStep(0);
    setMessage("Repeat this sequence: " + newSequence.join(" "));
  };

  const handleSelect = (emoji) => {
    if (emoji === sequenceRef.current[currentStep]) {
      // correct click
      if (currentStep + 1 === sequenceRef.current.length) {
        setMessage("🎉 You Win!");
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      // wrong click
      setMessage("❌ Wrong! Try Again!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{message}</h3>

      <div style={{ marginTop: 20 }}>
        {emojis.map((e) => (
          <button
            key={e}
            style={{ fontSize: 30, margin: 10 }}
            onClick={() => handleSelect(e)}
          >
            {e}
          </button>
        ))}
      </div>

      <button onClick={startGame} style={{ marginTop: 20 }}>
        START
      </button>
    </div>
  );
}
