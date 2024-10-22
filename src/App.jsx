import { useState, useEffect, useRef } from 'react';
import './App.css';
import QuestionList from './components/QuestionList';

function App() {
    const [playing, setPlaying] = useState(false);

    return (
        <main>
            <img id='yellow_blob' src='src/assets/yellow_blob.svg' />
            {!playing ? (
                <div className='new-game-page'>
                    <h1 className='title'>Quizzical</h1>
                    <h2 className='description'>
                        Answer All Five Questions Correctly to Win!
                    </h2>
                    <button
                        className='start-button'
                        onClick={() => setPlaying(true)}>
                        Start quiz
                    </button>
                </div>
            ) : (
                <div>
                    <QuestionList />
                </div>
            )}
            <img id='blue_blob' src='src/assets/blue_blob.svg' />
        </main>
    );
}

export default App;
