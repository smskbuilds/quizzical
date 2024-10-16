async function getQuestions() {
    const response = (
        await fetch(`https://opentdb.com/api.php?amount=5`)
    ).json();
    return response;
}

export default getQuestions;
