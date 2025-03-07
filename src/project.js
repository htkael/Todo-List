import { Task } from "./task";
import { displayTasks } from "./displayTasks";
import { saveToLocalStorage } from ".";

const taskName = document.querySelector("#taskName");
const taskDesc = document.querySelector("#taskDesc");
const taskDate = document.querySelector("#taskDate");
const taskPriority = document.querySelector("#taskPriority");

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(event) {
    event.preventDefault();
    const task = new Task(
      taskName.value,
      taskDesc.value,
      taskDate.value,
      taskPriority.value,
      this
    );
    console.log(this);
    this.tasks.push(task);
    saveToLocalStorage();
    taskName.value = "";
    taskDesc.value = "";
    taskDate.value = "";
    taskPriority.value = "";
    console.log("added task");
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      saveToLocalStorage();
      displayTasks(this);
    }
  }

  toJSON() {
    return {
      name: this.name,
      tasks: this.tasks.map((task) => task.toJSON()), // Use the Task's toJSON method
    };
  }
}
