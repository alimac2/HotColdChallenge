import React from 'react';

export default function NavBar(props) {
    // console.log(props);
    function handleRestart(e) {
        e.preventDefault();
        const restart = /* when user clicks on New Game link */
        props.onNewGame(restart);
    }
    
    return(
        <nav>
            <ul>
                <li><a href="#" onClick={() => props.onHandleInfo()}>WHAT ?</a></li>
                <li><a href="#" onClick={(restart) => props.onNewGame(restart)}>+ NEW GAME</a></li>
            </ul>
        </nav>
    );
}