
const path = require('path');
const express = require('express');
const { request } = require('http');
const app = express();
const port = 3000;

const root = path.join(__dirname, 'public');

const jokes = [
    {
        id: 1,
        question: "What do you call a bee that can't make up its mind?",
        answer: "A maybe."
    },
    {
        id: 2,
        question: "Why was six afraid of seven?",
        answer: "Because seven eight nine."
    },
    {
        id: 3,
        question: "What do you call a fake noodle?",
        answer: "An impasta."
    },
    {
        id: 4,
        question: "What do you call a fish with no eyes?",
        answer: "Fsh."
    },
    {
        id: 5,
        question: "What do you call a bear with no teeth?",
        answer: "A gummy bear."
    },
    {
        id: 6,
        question: "What do you call a dog that does magic tricks?",
        answer: "A labracadabrador."
    },
    {
        id: 7,
        question: "What do you call a cat that loves to play with yarn?",
        answer: "A yarnball."
    },
    {
        id: 8,
        question: "What do you call a cow with no legs?",
        answer: "Ground beef."
    },
    {
        id: 9,
        question: "What do you call a fish with a red nose?",
        answer: "Red-nosed fish."
    },
    {
        id: 10,
        question: "What do you call a dog that can do math?",
        answer: "A mathemutt."
    }

]

app.use(express.static(root));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root });
});

app.get('joke/:question', (request, response) => {
    response.sendFile('index.html', { root });
})

app.get('/api/v1/jokes/:answer', (req, res) => {
    res.sendFile('index.html', { root });
});

app.get('/api/v1/random-joke', (req, res) => {
  const random = Math.floor(Math.random() * jokes.length);
  res.send(JSON.stringify(jokes[random]));
});

app.get('/api/v1/jokes/random-joke/question', (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {console.log(`http://localhost:${port}/`);
});