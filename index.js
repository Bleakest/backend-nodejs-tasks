const yargs = require("yargs");
const { addNote, getNote, removeNote } = require("./notes-controller");

yargs.command({
  command: "add",
  describe: "add new note",
  builder: {
    title: {
      type: "string",
      describe: "title to add",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "all notes",
  handler() {
    const notes = getNote();
    console.log("here is the list on notes:", notes);
  },
});

yargs.command({
  command: "remove",
  describe: "remove note by id",
  builder: {
    id: {
      type: "number",
      describe: "id to delete",
      demandOption: true,
    },
  },
  handler({ id }) {
    removeNote(id);
  },
});

yargs.parse();
