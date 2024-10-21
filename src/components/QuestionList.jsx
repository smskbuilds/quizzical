import getQuestions from '../services/getQuestions';
import Question from './Question.jsx';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function QuestionList() {
    const [questionArray, setQuestionArray] = useState([]);
    const [checkAnswers, setCheckAnswers] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        getQuestions().then((results) => setQuestionArray(results));
    };

    console.log(questionArray);

    const questionElements = questionArray.length
        ? questionArray.map((question, index) => {
              return (
                  <Question
                      key={nanoid()}
                      questionIndex={index}
                      question={question.question}
                      correct_answer={question.correct_answer}
                      all_answers={question.all_answers}
                      selected_answer_index={question.selected_answer_index}
                      correct_answer_index={question.correct_answer_index}
                      handleSelectAnswer={handleSelectAnswer}
                      checkAnswers={checkAnswers}
                  />
              );
          })
        : '';

    function handleSelectAnswer(q, a) {
        console.log(q, a);
        setQuestionArray((questions) =>
            questions.map((question, index) => {
                if (index === q) {
                    return { ...question, selected_answer_index: a };
                } else {
                    return question;
                }
            })
        );
    }

    function handlePlayAgain() {
        setCheckAnswers(false);
        fetchQuestions();
    }

    return (
        <>
            <div key={nanoid()}>{questionElements}</div>
            {!checkAnswers ? (
                <button onClick={() => setCheckAnswers(true)}>
                    Check Answers
                </button>
            ) : (
                <div>
                    <h5>You scored 3/5 correct answers</h5>
                    <button onClick={() => handlePlayAgain()}>
                        Play Again
                    </button>
                </div>
            )}
        </>
    );
}

export default QuestionList;
