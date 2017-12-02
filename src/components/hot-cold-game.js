import React from 'react';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';
// import GuessHistory from './guess-history';


export default class HotColdGame extends React.Component {
     constructor(props) {
         super(props);
        this.state = {
                guessNumber: 80,
                guessHistory: [1, 6, 12, 39],
                feedback: 'You are Hot!'
        }
    }

    makeGuess() {
        this.setState(
            {feedback: 'You are Cold!'}
        ) 
    }
    
    
    handleInfo() {
        console.log('clicked what link');
    }

    newGame() {
        console.log('clicked new game')
    }

    
    render() {
        return (
            <div>
                <Header 
                    onHandleInfo={() => this.handleInfo()} 
                    onNewGame={() => this.newGame()} 
                />
                <GuessSection 
                    onMakeGuess={() => this.makeGuess()}
                    guessHistory={this.state.guessHistory}
                    feedback={this.state.feedback}
                />
                <InfoSection />
            </div>
        );
    }
}


/* <GuessHistory /> */

