import React from 'react';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
// import GuessForm from './guess-form';
// import GuessHistory from './guess-history';


export default function GuessSection(props) {
    function onNewGuess() {
        console.log('submitted new guess');
    }
    
    function onGuessCount() {
        console.log('count changed');
    }

    return (
        <div className="guess-section">
            <h2>Make your Guess!</h2>
            <GuessForm onNewGuess={() => onNewGuess()} />
            <GuessCount onGuessCount={() => onGuessCount} guessCount={10} />
            <GuessHistory prevGuesses={[2, 3, 4]} />
        </div>
    );
}

/*Make h2 change as user inputs different guesses*/