let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");
const filterButtons = document.querySelectorAll(".filters button");

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    tasks.push({
        text: text,
        done: false
    });

    input.value = "";
    save();
    render();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    save();
    render();
}
