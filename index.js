import chalk from "chalk";
import path from "path";
import { addNote, changeNote, getNotes, removeNote } from "./utils.js";
import express from "express";

const PORT = 3000;

const app = express();

const __dirname = import.meta.dirname;

app.set("view engine", "ejs");
app.set("views", "pages");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
  });
});

app.post("/", async (req, res) => {
  await addNote(req.body.title);
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
  });
});

app.delete("/:id", async (req, res) => {
  await removeNote(req.params.id);
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
  });
});

app.put("/:id", async (req, res) => {
  await changeNote(req.params.id, req.body);
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
  });
});

app.listen(PORT, () => {
  console.log(chalk.green(`Server has been started on port: ${PORT}`));
});
