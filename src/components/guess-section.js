import React from 'react';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
// import GuessForm from './guess-form';
// import GuessHistory from './guess-history';


export default function GuessSection(props) {

    return (
        <div className="guess-section">
            <h2>{props.feedback}</h2>
            <GuessForm />
            <GuessCount guessCount={props.guessHistory.length}/>
            <GuessHistory guessHistory={props.guessHistory} />
        </div>
    );
}

/*Make h2 change as user inputs different guesses*/