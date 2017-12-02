import React from 'react';

export default function GuessCount(props) {
    return(
        <p onChange={() => props.onGuessCount()}>Guess #<span>{props.guessCount}</span></p>
    );
}