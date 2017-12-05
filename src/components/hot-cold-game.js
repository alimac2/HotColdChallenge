import React from 'react';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';

export default class HotColdGame extends React.Component {
     constructor(props) {
         super(props);
        this.state = {
                secretNumber: 80,
                guessHistory: [1, 6, 12, 39],
                feedback: 'Make you Guess!'
        }
    }

    makeGuess(value) {
        console.log(value);
        console.log(typeof value);
        let feedback = ""
        
        if (value <= 74 || value >= 86) {
           let feeback = 'You are Cold!'
        }
        if (value >= 75 || value <= 85) {
           let feedback = "You are Getting Warm!"
        }
        if (value === 80) {
           let  feeback = "You are Hot!"
        }        

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