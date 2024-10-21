import './Question.css';
import { nanoid } from 'nanoid';
import he from 'he';

export default function Question(props) {
    function answerButtons(answers) {
        return answers.map((answer, answerIndex) => {
            return (
                <button
                    style={{}}
                    key={nanoid()}
                    onClick={() =>
                        props.handleClick(props.questionIndex, answerIndex)
                    }>
                    {he.decode(answer)}
                </button>
            );
        });
    }
    return (
        <>
            <h4>{he.decode(props.question)}</h4>
            <div key={nanoid()}>{answerButtons(props.all_answers)}</div>
        </>
    );
}
