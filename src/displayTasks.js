const content = document.querySelector(".main");

export const displayTasks = (project) => {
  content.innerHTML = "";
  if (project && project.tasks) {
    project.tasks.forEach((task) => {
      const taskCard = document.createElement("div");
      taskCard.className = "task-card";
      const name = document.createElement("h2");
      const dueDate = document.createElement("div");
      const removeTask = document.createElement("button");
      removeTask.textContent = "Remove Task";
      name.textContent = task.name;
      dueDate.textContent = `Due: ${task.dueDate}`;
      taskCard.append(name);
      taskCard.append(dueDate);
      taskCard.append(removeTask);
      removeTask.addEventListener("click", () => {
        project.removeTask(task);
      });
      content.append(taskCard);
    });
  } else {
    const noTasksMessage = document.createElement("div");
    noTasksMessage.textContent = "No tasks available for this project.";
    content.append(noTasksMessage);
  }
  const newTaskBtn = document.createElement("button");
  newTaskBtn.textContent = "Add Task";
  content.append(newTaskBtn);
  newTaskBtn.addEventListener("click", () => project.addTask());
};
