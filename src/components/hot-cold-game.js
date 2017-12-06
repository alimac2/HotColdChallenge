import React from 'react';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';

export default class HotColdGame extends React.Component {
     constructor(props) {
         super(props);
        this.state = {
                secretNumber: Math.floor(Math.random() * 100) + 1,
                guessHistory: [],
                feedback: 'Make your Guess!'
        }
    }

    makeGuess(value) {
        console.log(value);
        
        value = Number(value);
        let feedback = "";
        console.log(typeof value);
        let secretNumber = this.state.secretNumber;
        let diff = Math.abs(value - secretNumber);
        console.log(diff);

        if (diff === 0) {
            feedback = "You are on Fire!";
         } 
         if (diff <= 9 && diff >= 1) {
            feedback = "You are Warm!";
         }
         if (diff >= 10) {
           feedback = 'You are Cold!';
        }  
        
        this.setState(
            {feedback: feedback,
             guessHistory: [...this.state.guessHistory, value]   
            }
        ) 
    }
    /* can we unpack guessHistory a little more? or just spread  operators? */
    
    handleInfo() {
        console.log('clicked what link');
    }

    newGame() {
        this.setState(
            {
                secretNumber: 80, /* make random */
                guessHistory: [],
                feedback: 'Make your Guess!'   
            }
        )
    }

    
    render() {
        console.log(this.state.secretNumber);
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