const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
// const apiRoute = require('./routes/apiRoute.js')

const PORT = process.env.port || 3001;
const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//http://localhost:3001/api
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/pages/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/pages/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/pages/index.html'))
);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`)
);





//API routes
//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// app.get('/api/notes', (req, res) => {
//     console.info(`${req.method} request for notes recieved`);
//     // fs.readFile('./db/db.json').then((data) => 
//     // res.json(data));
//     fs.readFile('./db/db.json', (err, data) => {
//       if (err) console.error(err);
//       res.json(JSON.parse(data));
//     });
// });

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// app.post('/api/notes', (req, res) => {
//     console.info(`${req.method} request recieved to add a note`);
    
//     const { title, text } = req.body;

//     if (req.body) {
//         const newNote = {
//             title,
//             text,
//             noteId: uuidv4()
//         };

//         // const readAndAppend = (content, file) => {
//           fs.readFile('./db/db.json', 'utf8', (err, data) => {
//             if (err) {
//               console.error(err);
//             } else {
//               const parsedData = JSON.parse(data);
//               parsedData.push(content);
//               writeToFile(file, parsedData);
//             }
//           });
        // };


        // readAndAppend(newNote, './db/db.json');
//         res.json(`Note added!`);
//     } else {
//         res.errored(`Error adding note`);
//     }
// });

//* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.