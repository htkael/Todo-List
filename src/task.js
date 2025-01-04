import { saveToLocalStorage } from ".";

export class Task {
  constructor(taskName, taskDesc, taskDate, taskPriority, project) {
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.taskDate = taskDate;
    this.taskPriority = taskPriority;
    this.completed = false;
    this.project = project;
  }

  toggleComplete() {
    this.completed = !this.completed;
    saveToLocalStorage;
  }

  editTaskInfo(editTaskName, editTaskDesc, editTaskDate, editTaskPriority) {
    this.taskName = editTaskName;
    this.taskDesc = editTaskDesc;
    this.taskDate = editTaskDate;
    this.taskPriority = editTaskPriority;
    saveToLocalStorage();
  }

  toJSON() {
    return {
      taskName: this.taskName,
      taskDesc: this.taskDesc,
      taskDate: this.taskDate,
      taskPriority: this.taskPriority,
      completed: this.completed,
    };
  }
}
