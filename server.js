const express = require('express');
const path = require('path');
// const api = require('./public/assets/js/index.js');
const fs = require('fs');

const PORT = process.env.port || 3001;
const app = express(); 

const notesData = require('./db/db.json');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);
app.use(express.static(path.join(__dirname, 'public')));

//takes us to the html home page for note taker
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './index.html'));
});

//* `GET *` should return the `index.html` file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

//* `GET /notes` should return the `notes.html` file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './notes.html'))
});

//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
    res.json(notesData);
});
//not done with the above just yet

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/api/notes', (req, res) => {
    const newNote = makeNote(req.body, notesData);
    res.json(newNote);
});

//* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// function makeNote

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`)
);