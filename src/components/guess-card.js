import React from 'react';
import GuessForm from './guess-form';
import GuessTracker from './guess-tracker';


export default function GuessCard(props){
    return (
        <div className="guess-card">
            <h2>Make your Guess!</h2>
            <GuessForm />
            <GuessTracker />
        </div>
    );
}

/*Make h2 change as user inputs different guesses*/