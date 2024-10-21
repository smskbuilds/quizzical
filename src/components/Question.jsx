import './Question.css';
import { nanoid } from 'nanoid';
import he from 'he';

export default function Question(props) {
    const answerButtons = props.all_answers.map((answer, answerIndex) => {
        return (
            <button
                className={buttonColor(answerIndex)}
                key={nanoid()}
                onClick={() =>
                    props.handleSelectAnswer(props.questionIndex, answerIndex)
                }>
                {he.decode(answer)}
            </button>
        );
    });

    function buttonColor(answerIndex) {
        if (!props.checkAnswers && props.selected_answer_index === answerIndex)
            return 'unchecked-answer';
        if (props.checkAnswers && props.correct_answer_index === answerIndex)
            return 'correct-answer';
        if (
            props.checkAnswers &&
            props.selected_answer_index === answerIndex &&
            props.correct_answer_index !== answerIndex
        )
            return 'incorrect-answer';
        return '';
    }

    return (
        <>
            <h4>{he.decode(props.question)}</h4>
            <div key={nanoid()}>{answerButtons}</div>
        </>
    );
}
