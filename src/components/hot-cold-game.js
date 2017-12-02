import React from 'react';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';
// import GuessHistory from './guess-history';


// export default class HotColdGame extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
                /*guessNumber: ''*/
    //     }

export default function HotColdGame(props) {
    
    function handleInfoLink() {
        console.log('clicked what link');
    }

    function onNewGame() {
        console.log('clicked new game')
    }

    
    // render() {
        return (
            <div>
                <Header handleInfoLink={() => handleInfoLink()} onNewGame={() => onNewGame()} />
                <GuessSection />
                <InfoSection />
            </div>
        );
    // }
}


/* <GuessHistory /> */

