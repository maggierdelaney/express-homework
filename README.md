# Express: Note-Taker

## Description

Github Repo: https://github.com/maggierdelaney/express-homework

This homework assignment required the following acceptance criteria:
- GIVEN a note-taking application, WHEN I open the Note Taker, THEN I am presented with a landing page with a link to a notes page
    - Upon opening the index.html to http://localhost:3001, you will arrive to a landing home page with a button for "Getting Started"

- WHEN I click on the link to the notes page, THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
    - Upon clicking "Getting started" you will be taken to the notes pages with pre-populated notes on the left, and an empty note on the right to make a new note

- WHEN I enter a new note title and the note’s text, THEN a Save icon appears in the navigation at the top of the page
    - After you tpye some text into the body of the note, the save button will apear

- WHEN I click on the Save icon, THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
    - Once the save icon is clicked, you will see your new note populate on the bottom left-hand side at the bottom of the list

- WHEN I click on an existing note in the list in the left-hand column, THEN that note appears in the right-hand column
    - Not completed

- WHEN I click on the Write icon in the navigation at the top of the page, THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
    - Not completed


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Starter code was provided for this assignment to give the front end design and functionality, for this assignment the backend was created using express. Npm and express were installed.

2. First a server.js file was created to establish the html routes for the home page and notes page.

3. An index.js file was created to establish the api route, and then the apiRoute.js created the endpoint.

## Usage

1. Run the server.js to be taken to http://localhost:3001

2. Click on "Getting started"

![home](/images/home.png)

3. Now you will see the notes page where there are pre-populated notes on the left, and empty space for a new note on the right.

![notes](/images/notes.png)

4. Type in your note, and click the "save" icon that populates. Your note will appear on the left hand side!

![type note](/images/type-note.png)
![save note](/images/save-note.png)

## Credits

Nodejs npm
Express

## License

Distributed under the MIT License.

## Badges

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
