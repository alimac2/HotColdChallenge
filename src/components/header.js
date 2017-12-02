import React from 'react';
import NavBar from './nav-bar';

export default function Header(props) {
    return (
        <header>
            <NavBar handleInfoLink={() => props.handleInfoLink()} onNewGame={() => props.onNewGame()} />
            <h1>HOT or COLD</h1>
        </header>
    );
}