import React from 'react';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';
// import GuessHistory from './guess-history';


export default class HotColdGame extends React.Component {
     constructor(props) {
         super(props);
        this.state = {
                secretNumber: 80,
                guessHistory: [1, 6, 12, 39],
                feedback: 'You are Hot!'
        }
    }

    makeGuess(value) {
        console.log(value);
        console.log(typeof value);
        let feedback = 'You are cold';

        this.setState(
            {feedback: feedback,
             guessHistory: [...this.state.guessHistory, value]   
            }
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
                    onMakeGuess={(value) => this.makeGuess(value)}
                    guessHistory={this.state.guessHistory}
                    feedback={this.state.feedback}
                />
                <InfoSection />
            </div>
        );
    }
}


/* <GuessHistory /> */

