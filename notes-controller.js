const fs = require("fs/promises");
const path = require("path");

const dbPath = path.join(__dirname, "db.json");

async function addNote(title) {
  const notes = require(dbPath);

  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);
  await fs.writeFile(dbPath, JSON.stringify(notes));
}
function getNote() {
  return require(dbPath);
}
async function removeNote(id) {
  const notes = require(dbPath);
  const newArr = notes.filter((note) => note.id != id);

  await fs.writeFile(dbPath, JSON.stringify(newArr));
}

module.exports = {
  addNote,
  getNote,
  removeNote,
};
