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
  }

  editTaskInfo(editTaskName, editTaskDesc, editTaskDate, editTaskPriority) {
    this.taskName = editTaskName;
    this.taskDesc = editTaskDesc;
    this.taskDate = editTaskDate;
    this.taskPriority = editTaskPriority;
  }
}
