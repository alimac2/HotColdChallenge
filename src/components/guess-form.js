import React from 'react';

export default function GuessForm(props) {
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" name="guess" placeholder="Enter your Guess"/>
                <button type="submit" onClick={() => props.onMakeGuess()}>Guess</button>
            </form>
        </div>
    );
}

/*in input tag probably add onChange={e => props.onChange(e.target.value) */