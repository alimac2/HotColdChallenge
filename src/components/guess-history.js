import React from 'react';
import './guess-history.css';

export default function GuessHistory(props) {
    // console.log(props.prevGuesses);
    const guessHistory = props.guessHistory.map((guess, index) => {
        return <li key={index}>{guess}</li>
    });
    
    return (
        <ul className="guess-history">
            {guessHistory}
        </ul>
    );
}