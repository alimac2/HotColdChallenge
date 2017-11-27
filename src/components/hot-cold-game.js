import React from 'react';
import GuessCard from './guess-card';
import GuessForm from './guess-form';
import GuessTracker from './guess-tracker';


// export default class HotColdGame extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
                /*guessNumber: ''*/
    //     }

export default function HotColdGame(props) {
    
    // render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="#">WHAT ?</a></li>
                        <li><a href="#">+ NEW GAME</a></li>
                    </ul>
                </nav>

                <h1>HOT or COLD</h1>
                <GuessCard />
                <GuessForm />
                <GuessTracker />
            </div>
        );
    // }
}


