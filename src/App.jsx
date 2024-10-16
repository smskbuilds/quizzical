import { useState, useEffect, useRef } from 'react';
import './App.css';
import getQuestions from './services/getQuestions';

function App() {
    const [playing, setPlaying] = useState(false);
    const [questions, setQuestions] = useState(getQuestions());

    return (
        <main>
            <img id='yellow_blob' src='src/assets/yellow_blob.svg' />
            {!playing ? (
                <>
                    <h1>Quizzical</h1>
                    <h2>Answer All Five Questions Correctly to Win!</h2>
                    <button onClick={() => setPlaying(true)}>Start quiz</button>
                </>
            ) : (
                <div>logic here for playing the game</div>
            )}
            <img id='blue_blob' src='src/assets/blue_blob.svg' />
        </main>
    );
}

export default App;
