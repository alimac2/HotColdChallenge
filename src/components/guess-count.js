import React from 'react';
import './guess-count.css';

export default function GuessCount(props) {
    return(
        <p className="guess-count" onChange={() => props.onGuessCount()}>Guess #<span>{props.guessCount}</span></p>
    );
}