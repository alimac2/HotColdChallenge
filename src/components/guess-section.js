import React from 'react';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
// import GuessForm from './guess-form';
// import GuessHistory from './guess-history';


export default function GuessSection(props) {
    return (
        <div className="guess-section">
            <h2>Make your Guess!</h2>
            <GuessForm />
            <GuessCount />
            <GuessHistory prevGuesses={[2, 3, 4]} />
        </div>
    );
}

/*Make h2 change as user inputs different guesses*/