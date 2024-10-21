import getQuestions from '../services/getQuestions';
import Question from './Question.jsx';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function QuestionList() {
    const [questionArray, setQuestionArray] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const fetchedQuestions = await getQuestions();
            setQuestionArray(fetchQuestions);
        };
        fetchQuestions();
    }, []);

    const questionElements = questionArray.length
        ? questionArray.map((question, index) => {
              return (
                  <Question
                      key={nanoid()}
                      questionIndex={index}
                      question={question.question}
                      correct_answer={question.correct_answer}
                      all_answers={question.all_answers}
                      handleClick={handleClick}
                  />
              );
          })
        : '';

    function handleClick(q, a) {
        console.log(q, a);

        // setQuestions((questions) =>
        //     questions.map((question, index) => {
        //         if ((index = q)) {
        //             return (question.selected_answer = a);
        //         } else {
        //             return question;
        //         }
        //     })
        // );
        // console.log(questions);
    }

    return (
        <>
            <div key={nanoid()}>{questionElements}</div>
        </>
    );
}

export default QuestionList;
