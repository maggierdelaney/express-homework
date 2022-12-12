const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

//http://localhost:3001/api/notes/

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request for notes recieved`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.get('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  readFromFile('./db/tips.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});


// POST Route for a new note
notes.post('/', (req, res) => {
  console.info(`${req.method} request recieved to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});


module.exports = notes;