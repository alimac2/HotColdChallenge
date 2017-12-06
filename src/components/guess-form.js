import React from 'react';

export default function GuessForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        const value = e.target.guess.value;
        /*value.reset();  trying to clear input*/
        props.onMakeGuess(value);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="guess" placeholder="Enter your Guess"/>
                <button type="submit">Guess</button>
            </form>
        </div>
    );
}