import React from 'react';

export default function GuessHistory(props) {
    console.log(props.prevGuesses);
    const prevGuesses = props.prevGuesses.map((guess, index) => {
        return <li key={index}>{guess}</li>
    });
    
    return (
        <ul>
            <li>10</li>
            {prevGuesses}
        </ul>
    );
}