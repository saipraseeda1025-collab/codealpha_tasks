const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const FILE = "tasks.json";

function getTasks() {
    return JSON.parse(fs.readFileSync(FILE));
}

function saveTasks(tasks) {
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

app.get("/tasks", (req, res) => {
    res.json(getTasks());
});

app.post("/tasks", (req, res) => {
    const tasks = getTasks();

    const task = {
        id: Date.now(),
        title: req.body.title,
        completed: false,
        priority: req.body.priority
    };

    tasks.push(task);

    saveTasks(tasks);

    res.json(task);
});

app.put("/tasks/:id", (req, res) => {
    const tasks = getTasks();

    const updated = tasks.map(t =>
        t.id == req.params.id
            ? { ...t, completed: !t.completed }
            : t
    );

    saveTasks(updated);

    res.send("Updated");
});

app.delete("/tasks/:id", (req, res) => {

    const tasks = getTasks();

    const filtered =
        tasks.filter(
            t => t.id != req.params.id
        );

    saveTasks(filtered);

    res.send("Deleted");
});

app.listen(3000, () =>
console.log("Running → http://localhost:3000"));