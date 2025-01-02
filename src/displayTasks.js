import { createTaskCard, content } from "./createTaskCard";

export const displayTasks = (project) => {
  content.innerHTML = "";
  if (project && project.tasks) {
    project.tasks.forEach((task) => createTaskCard(task));
  } else {
    const noTasksMessage = document.createElement("div");
    noTasksMessage.textContent = "No tasks available for this project.";
    content.append(noTasksMessage);
  }
  const newTaskBtn = document.createElement("button");
  newTaskBtn.textContent = "+";
  newTaskBtn.id = "addTask";
  content.append(newTaskBtn);
  newTaskBtn.addEventListener("click", () => project.addTask());
};
