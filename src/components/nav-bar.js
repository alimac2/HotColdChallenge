import React from 'react';

export default function NavBar(props) {
    console.log(props);
    return(
        <nav>
            <ul>
                <li><a href="#" onClick={() => props.handleClick()}>WHAT ?</a></li>
                <li><a href="#">+ NEW GAME</a></li>
            </ul>
        </nav>
    );
}