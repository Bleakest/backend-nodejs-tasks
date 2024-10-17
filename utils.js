import fs from "fs/promises";
import path from "path";
// import chalk from "chalk";

const __dirname = import.meta.dirname;

const dbPath = path.join(__dirname, "db.json");

export const addNote = async (title) => {
  const notes = await getNotes();
  const note = {
    title,
    id: Date.now().toString(),
  };
  notes.push(note);
  saveNotes(notes);
};
export const getNotes = async () => {
  const notes = await fs.readFile(dbPath, { encoding: "utf-8" });

  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
};
const saveNotes = async (notes) => {
  await fs.writeFile(dbPath, JSON.stringify(notes));
};
export const removeNote = async (id) => {
  const notes = await getNotes();
  const newArr = notes.filter((note) => note.id != id);

  await fs.writeFile(dbPath, JSON.stringify(newArr));
};

export const changeNote = async (id, { title }) => {
  const notes = await getNotes();
  const newObject = {
    title,
    id,
  };

  const newArr = notes.map((note) => {
    if (note.id == id) {
      return newObject;
    }
    return note;
  });

  await fs.writeFile(dbPath, JSON.stringify(newArr));
};
