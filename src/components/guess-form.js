import React from 'react';

export default function GuessForm(props) {
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input type="number" name="guess" placeholder="Enter your Guess"/>
                <button type="submit">Guess</button>
            </form>
            <p>Guess #<span></span></p>
        </div>
    );
}

/*in input tag probably add onChange={e => props.onChange(e.target.value) */