import React from 'react';

export default function NavBar(props) {
    console.log(props);
    return(
        <nav>
            <ul>
                <li><a href="#" onClick={() => props.handleNavClick()}>WHAT ?</a></li>
                <li><a href="#" onClick={() => props.handleNavClick()}>+ NEW GAME</a></li>
            </ul>
        </nav>
    );
}