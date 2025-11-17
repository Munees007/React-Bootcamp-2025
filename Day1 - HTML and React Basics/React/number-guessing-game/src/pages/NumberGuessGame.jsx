import { useState } from "react";
import { toast } from "react-toastify";

export function NumberGuessGame() {
    const [number, setNumber] = useState();
    const [guessingNumber] = useState(Math.floor(Math.random() * 20) + 1); // 1-20

    function handleCheck() {
        if (number === guessingNumber) {
            toast.success("Guessed Correct!");
        } else if (number < guessingNumber) {
            toast.info("Too Low!");
        } else {
            toast.info("Too High!");
        }
    }

    return (
        <div>
            <h3>Number Guessing Game (1-20)</h3>
            <input 
                type="number" 
                min={1} 
                max={20} 
                value={number || ""} 
                onChange={(e) => setNumber(Number(e.target.value))} 
            />
            <button onClick={handleCheck}>Check</button>
        </div>
    );
}
