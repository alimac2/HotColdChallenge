import React from 'react';

export default function GuessForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        const value = e.target.guess.value;
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

/*in input tag probably add onChange={e => props.onChange(e.target.value) */