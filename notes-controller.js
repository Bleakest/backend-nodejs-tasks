const fs = require("fs/promises");
const path = require("path");
const chalk = require('chalk')

const dbPath = path.join(__dirname, "db.json");

async function addNote(title) {
  const notes = await getNotes()

  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);
  await fs.writeFile(dbPath, JSON.stringify(notes));
}

async function getNotes() {
  const notes = await fs.readFile(dbPath, {encoding: 'utf-8'})
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes): []
}

async function removeNote(id) {
  const notes = await getNotes()
  const newArr = notes.filter((note) => note.id != id);

  await fs.writeFile(dbPath, JSON.stringify(newArr));
}

async function printNotes() {
  const notes = await getNotes()

  notes.forEach(note => {
    console.log(chalk.bgWhite(note.id), chalk.blue(note.title));
    
  });
}

module.exports = {
  addNote,
  printNotes,
  removeNote,
};
