async function getQuestions() {
    let response;
    try {
        do {
            console.log('Fetching questions...');
            response = await (
                await fetch(
                    `https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`
                )
            ).json();
            if (response.response_code !== 0) {
                console.log(
                    'Fetch failed. Waiting for 2 seconds before trying again...'
                );
                await new Promise((resolve) => setTimeout(resolve, 2000));
            }
        } while (response.response_code !== 0);
        let questionArray = response.results;
        for (const question of questionArray) {
            question.selected_answer_index = -1;
            const allAnswers = [...question.incorrect_answers];
            const randomIndex = Math.floor(
                Math.random() * (allAnswers.length + 1)
            );
            allAnswers.splice(randomIndex, 0, question.correct_answer);
            question.all_answers = allAnswers;
            question.correct_answer_index = randomIndex;
        }
        return questionArray;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
}

export default getQuestions;
