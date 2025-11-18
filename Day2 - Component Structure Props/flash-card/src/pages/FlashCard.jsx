import { useState } from "react";

export function Flashcard() {
    // Array of flashcards
    const flashcards = [
        { question: "What is JavaScript?", answer: "A programming language for web" },
        { question: "What is HTML?", answer: "Structure of the webpage" },
        { question: "What is CSS?", answer: "Styles the webpage" },
    ];

    // State for current card index and answer visibility
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    // Function to toggle answer visibility
    const toggleAnswer = () => {
        setShowAnswer(prev => !prev);
    };

    // Function to go to next card
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setShowAnswer(false); // Reset answer visibility
    };

    return (
        <div style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#f7ede2"
        }}>
            <div style={{
                background: "#84a59d",
                color: "#fff",
                padding: "25px",
                borderRadius: "15px",
                textAlign: "center",
                width: "300px",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
            }}>
                <h3>Flashcard App</h3>
                <p style={{ margin: "15px 0", fontWeight: "bold" }}>
                    {flashcards[currentIndex].question}
                </p>
                {showAnswer && (
                    <p style={{ margin: "15px 0" }}>
                        {flashcards[currentIndex].answer}
                    </p>
                )}
                <div>
                    <button 
                        onClick={toggleAnswer} 
                        style={{ margin: "5px", padding: "5px 15px", borderRadius: "5px", cursor: "pointer", border: "none", background: "#f6bd60" }}
                    >
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                    </button>
                    <button 
                        onClick={nextCard} 
                        style={{ margin: "5px", padding: "5px 15px", borderRadius: "5px", cursor: "pointer", border: "none", background: "#f28482" }}
                    >
                        Next Card
                    </button>
                </div>
                <p style={{ marginTop: "10px" }}>Card {currentIndex + 1} / {flashcards.length}</p>
            </div>
        </div>
    );
}
