import { Task } from "./task";
import { displayTasks } from "./displayTasks";

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
    this.tasks.push(task);
    (taskName.value = ""),
      (taskDesc.value = ""),
      (taskDate.value = ""),
      (taskPriority.value = "");
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      displayTasks(this);
    }
  }
}
