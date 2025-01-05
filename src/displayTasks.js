import { createTaskCard, content } from "./createTaskCard";
import { displayTaskModal } from "./modals";

export const displayTasks = (project) => {
  content.innerHTML = "";
  if (project && project.tasks.length > 0) {
    console.log("Resetting tasks");
    project.tasks.forEach((task) => {
      createTaskCard(task, project);
    });
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

export const clearTaskDisplay = () => {
  const clear = document.querySelector(".taskList");
  console.log("Before clearing:", clear.innerHTML);
  clear.innerHTML = "";
  const noTasksMessage = document.createElement("div");
  noTasksMessage.textContent = "Please select a project to view tasks.";
  clear.append(noTasksMessage);
  console.log("After clearing:", clear.innerHTML);
};
