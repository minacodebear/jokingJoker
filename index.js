

let jokes = [
    {question: "Why don't scientists trust atoms?", answer: "Because they make up everything"},
    {question: "What did one ocean say to the other ocean?", answer: "Nothing, it just waved"},
    {question: "What does a nosey pepper do?", answer: "It gets jalapeno business"},
    {question: "Why should you never trust stairs?", answer: "Because they're always up to something"},
    {question: "When does a joke become a 'dad' joke?", answer: "When it becomes apparent"},
    {question: "How do you measure a snake?", answer: "In inches- they don't have feet"},
    {question: "Where does a waitress with only one leg work?", answer: "In IHOP"},
    {question: "What did the tree say in spring?", answer: "'What a re-leaf'"},
    {question: "What does a house wear?", answer: "Address"},
    {question: "Why is Peter Pan always flying?", answer: "Because he Neverlands"},
    {question: "Two windmills are standing on a wind farm. One asks, 'What's your favorite kind of music?' What did the other one say?", answer: "The other replies, 'I'm a big metal fan'"},
    {question: "How does NASA organize a party?", answer: "They planet"},
    {question: "Why did the bicycle fall over?", answer: "Because it was two-tired"},
    {question: "Why were they called the 'dark ages'?", answer: "Because there were a lot of knights"},
    {question: "Why do teddy bears never eat?", answer: "Because they are always stuffed"},
    {question: "Did you hear about the cheese factory that exploded in France?", answer: "There was nothing left but de Brie"},
    {question: "I never take my dog to the park because the ducks keep trying to bite him. Why does the ducks keep biting my dog?", answer: "I guess it's because I bought a pure bread-dog"},
    {question: "As a scarecrow, people say I'm outstanding in my field.", answer: "But hay, it's in my jeans"},
    {question: "Can a kangaroo jump higher than the Empire State Building?", answer: "Of course! The Empire State Building can't jump"},
    {question: "What do you call a fake spaghetti?", answer: "An impasta"},
    {question: "Why are crabs so bad at sharing?", answer: "Because they're all shellfish"},
    {question: "You heard the rumor going around butter?", answer: "Never mind, I shouldn't spread it"},
    {question: "Why don't some fish play a guitar?", answer: "Because it can't tuna fish"},
]

let jokeButton = document.getElementById("jokeButton")
let jokeQuestion = document.getElementById("jokeQuestion")
let jokeAnswer = document.getElementById("jokeAnswer")
let submitButton = document.getElementById("submit")

let index;

function jokeGenerator() {
    index = Math.floor(Math.random() * jokes.length);
    let joke = jokes[index];
    console.log(joke)
    jokeQuestion.textContent = joke.question;
    document.getElementById("typeAnswer").value = "";
    document.getElementById("message").textContent = "";
    document.body.style.backgroundColor = "#B9FAF8"
}

function answerGenerator() {
    let typeAnswer = document.getElementById("typeAnswer").value;
    let currentJoke = jokes[index];
    let correctAnswer = currentJoke.answer;

    if (typeAnswer === correctAnswer) {
        document.getElementById("message").textContent = "YAY! You got it correct!";
        document.body.style.backgroundColor = "green"
    } else {
        document.getElementById("message").textContent = "Uh-oh, it's wrong! The answer is..." + correctAnswer;
        document.body.style.backgroundColor = "red"
    }
}

jokeButton.addEventListener("click", jokeGenerator)
submitButton.addEventListener("click", answerGenerator)
