import React from 'react';

export default function NavBar(props) {
    // console.log(props);
    
    return(
        <nav>
            <ul>
                <li><a href="#info-section" onClick={() => props.onHandleInfo()}>WHAT ?</a></li>
                <li><a href="#" onClick={() => props.onNewGame()}>+ NEW GAME</a></li>
            </ul>
        </nav>
    );
}