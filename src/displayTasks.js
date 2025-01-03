import { createTaskCard, content } from "./createTaskCard";
import { displayTaskModal } from "./modals";
import { myProjectManager } from ".";

export const displayTasks = (project) => {
  content.innerHTML = "";
  if (project && project.tasks.length > 0) {
    console.log("Resetting tasks");
    console.log(project);
    console.log(myProjectManager);
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
