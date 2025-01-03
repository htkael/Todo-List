import { createTaskCard, content } from "./createTaskCard";
import { displayTaskModal } from "./modals";

export const displayTasks = (project) => {
  content.innerHTML = "";
  if (project.tasks.length > 0) {
    project.tasks.forEach((task) => createTaskCard(task, project));
  } else {
    const noTasksMessage = document.createElement("div");
    noTasksMessage.textContent = "No tasks available for this project.";
    content.append(noTasksMessage);
  }
  const newTaskBtn = document.createElement("button");
  newTaskBtn.textContent = "+";
  newTaskBtn.id = "addTask";
  content.append(newTaskBtn);
  newTaskBtn.addEventListener("click", () => displayTaskModal());
};
