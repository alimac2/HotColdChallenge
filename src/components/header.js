import React from 'react';
import NavBar from './nav-bar';
import './header.css';

export default function Header(props) {
    return (
        <header className="banner">
            <NavBar onHandleInfo={() => props.onHandleInfo()} onNewGame={() => props.onNewGame()} />
            <h1>HOT or COLD</h1>
        </header>
    );
}