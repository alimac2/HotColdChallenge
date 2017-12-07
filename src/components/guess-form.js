import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        const value = e.target.guess.value;
        props.onMakeGuess(value);
        e.target.guess.value = ""; /*clear input*/
        /* another way: e.target.reset() */
    }

    return (
        <div className="guess-form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="guess" placeholder="Enter your Guess"/>
                <button type="submit">Guess</button>
            </form>
        </div>
    );
}