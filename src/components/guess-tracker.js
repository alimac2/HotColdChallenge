import React from 'react';

export default function GuessTracker(props){
    const prevGuesses = this.props.prevGuesses.map((guess) => {
    <li>{props.guess}</li>
    });
    
    return (
        <ul>
            {prevGuesses}
        </ul>
    );
}