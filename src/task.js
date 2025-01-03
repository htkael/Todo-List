export class Task {
  constructor(taskName, taskDesc, taskDate, taskPriority) {
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}
