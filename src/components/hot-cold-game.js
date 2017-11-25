import React from 'react';

import GuessCard from './guess-card';

export default class HotColdGame extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
                /*guessNumber: ''*/
    //     }

    
    render() {
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
            </div>
        );
    }
}


