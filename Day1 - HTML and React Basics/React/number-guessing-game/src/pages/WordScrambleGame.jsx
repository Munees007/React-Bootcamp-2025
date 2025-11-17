import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const wordsList = ["dean", "castiel", "klaus", "sam", "house"];

function scrambleWord(original) {
    let scrambled = "";

    // keep scrambling until it's different from the original
    while (scrambled === "" || scrambled === original) {
        scrambled = "";
        const usedIndices = [];

        for (let i = 0; i < original.length; i++) {
            let rand = Math.floor(Math.random() * original.length);
            while (usedIndices.includes(rand)) {
                rand = Math.floor(Math.random() * original.length);
            }
            usedIndices.push(rand);
            scrambled += original[rand];
        }
    }

    return scrambled.toUpperCase();
}

export function WordScrambleGame() {
    const [index, setIndex] = useState(0);
    const [scrambled, setScrambled] = useState(scrambleWord(wordsList[0]));
    const [input, setInput] = useState("");

    useEffect(() => {
        if (index < wordsList.length) {
            setScrambled(scrambleWord(wordsList[index]));
            setInput("");
        }
    }, [index]);

    const handleCheck = () => {
        if (index >= wordsList.length) {
            toast.info("Game Ended!");
            return;
        }

        if (input.toLowerCase() === wordsList[index].toLowerCase()) {
            toast.success("Correct!");
            if (index + 1 < wordsList.length) {
                setIndex(index + 1);
            } else {
                toast.success("🎉 All words completed!");
                setIndex(wordsList.length); // end game
            }
        } else {
            toast.error("Wrong! Try again");
        }
    };

    return (
        <div>
            <div>
                <h2>Word Scramble</h2>
                <p>
                    {scrambled}
                </p>
                <input
                    type="text"
                    value={input}
                    placeholder="Type here..."
                    onChange={(e) => setInput(e.target.value)}
                    
                />
                <button
                    onClick={handleCheck}
                >
                    Check
                </button>
            </div>
        </div>
    );
}
