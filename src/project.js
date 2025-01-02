import { Task } from "./task";

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
    console.log(`Added: ${task}`);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      console.log(`Removed: ${task}`);
    } else {
      console.log(`${item} not found`);
    }
  }

  displayTasks() {
    if (this.tasks.length > 0) {
      console.log(`Items in array: ${this.tasks}`);
    } else {
      console.log("No tasks in project");
    }
  }
}
