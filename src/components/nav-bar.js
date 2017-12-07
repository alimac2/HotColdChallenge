import React from 'react';
import './nav-bar.css';

export default function NavBar(props) {
    // console.log(props);
    
    return(
        <nav>
            <ul>
                <li className="what"><a href="#info-section" onClick={() => props.onHandleInfo()}>WHAT ?</a></li>
                <li className="new-game"><a href="#" onClick={() => props.onNewGame()}>+ NEW GAME</a></li>
            </ul>
        </nav>
    );
}