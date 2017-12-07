import React from 'react';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
import './guess-section.css';


export default function GuessSection(props) {

    return (
        <div className="guess-section">
            <h2>{props.feedback}</h2>
            <GuessForm onMakeGuess={(value) => props.onMakeGuess(value)} />
            <GuessCount guessCount={props.guessHistory.length}/>
            <GuessHistory guessHistory={props.guessHistory} />
        </div>
    );
}