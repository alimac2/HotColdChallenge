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
    
    function handleNavClick() {
        console.log('clicked nav links');
    }

    
    // render() {
        return (
            <div>
                <Header handleNavClick={() => handleNavClick()} />
                <GuessSection />
                <InfoSection />
            </div>
        );
    // }
}


/* <GuessHistory /> */

