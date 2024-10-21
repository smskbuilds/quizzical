async function getQuestions() {
    let response;
    try {
        do {
            console.log('Fetching questions...');
            response = await (
                await fetch(
                    `https://opentdb.com/api.php?amount=5&type=multiple`
                )
            ).json();
            if (response.response_code !== 0) {
                console.log(
                    'Fetch failed. Waiting for 4 seconds before trying again...'
                );
                await new Promise((resolve) => setTimeout(resolve, 4000));
            }
        } while (response.response_code !== 0);
        console.log(response);

        /*         let questionArray = response.results;
        for (const question of questionArray) {
            question.selected_answer = -1;
            const allAnswers = [...question.incorrect_answers];
            const randomIndex = Math.floor(
                Math.random() * (allAnswers.length + 1)
            );
            allAnswers.splice(randomIndex, 0, question.correct_answer);
            question.all_answers = allAnswers;
            question.correct_answer_index = randomIndex;
        }
        return questionArray; */
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
}

export default getQuestions;
