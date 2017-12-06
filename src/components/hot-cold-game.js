import React from 'react';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';

export default class HotColdGame extends React.Component {
     constructor(props) {
         super(props);
        this.state = {
                secretNumber: 80,
                guessHistory: [],
                feedback: 'Make your Guess!'
        }
    }

    /* to make secretNumber random use Math.floor(Math.random() * 100)*/

    makeGuess(value) {
        // console.log(value);
        console.log(typeof value);
        value = Number(value); /*or parseInt(value, 10) */
        let feedback = "";
        
        if (value <= 74 || value >= 86) {
           feedback = 'You are Cold!';
        } else if (value >= 75 || value <= 85) {
           feedback = "You are Warm!";
        } else if (value === 80) {
           feedback = "You are on Fire!";
        }        

        /* 
        if (value <= secretNumber - 6 || value >= secretNumber + 6) {
           let feedback = 'You are Cold!'
        } if else (value >= secretNumber - 5 || value <= secretNumber + 5) {
           let feedback = "You are Getting Warm!"
        } if else (value === secretNumber) {
           let  feedback = "You are Hot!"
        }    
        */

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

    newGame(restart) {
        this.setState(
            {
                secretNumber: 80, /* make it random */
                guessHistory: [],
                feedback: 'Make your Guess!'   
            }
        )
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