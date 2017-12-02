import React from 'react';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';
// import GuessHistory from './guess-history';


export default class HotColdGame extends React.Component {
     constructor(props) {
         super(props);
        this.state = {
                /*guessNumber: ''*/
        }
    }
    
    onHandleInfo() {
        console.log('clicked what link');
    }

    onNewGame() {
        console.log('clicked new game')
    }

    
    render() {
        return (
            <div>
                <Header 
                    onHandleInfo={() => this.onHandleInfo()} 
                    onNewGame={() => this.onNewGame()} 
                />
                <GuessSection />
                <InfoSection />
            </div>
        );
    }
}


/* <GuessHistory /> */

