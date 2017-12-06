import React from 'react';

export default function GuessHistory(props) {
    // console.log(props.prevGuesses);
    const guessHistory = props.guessHistory.map((guess, index) => {
        return <li key={index}>{guess}</li>
    });
    
    return (
        <ul>
            {guessHistory}
        </ul>
    );
}