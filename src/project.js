import { Task } from "./task";
import { displayTasks } from "./displayTasks";

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask() {
    const taskName = prompt("Name?");
    const desc = prompt("Description?");
    const dueDate = prompt("Due Date?");
    const priority = prompt("Priority?");
    const task = new Task(taskName, desc, dueDate, priority);
    this.tasks.push(task);
    displayTasks(this);
    console.log(`Added: ${task}`);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      console.log(`Removed: ${task}`);
      displayTasks(this);
    }
  }
}
