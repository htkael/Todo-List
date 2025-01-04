import { createElement } from "./utils";
import { checkComplete, checkPriority } from "./priority";
import { displayTaskCard } from "./modals";
import { displayTasks } from "./displayTasks";

export const content = document.querySelector(".taskList");
export const createTaskCard = (task, project) => {
  const taskCard = createElement("div", ["task-card"]);
  const complete = createElement("input");
  complete.type = "checkbox";
  complete.checked = task.completed;
  const name = createElement("h2", [], task.taskName);
  const dueDate = createElement("div", [], `Due: ${task.taskDate}`);
  const removeTask = createElement("button", ["removeButton"], "");
  taskCard.append(complete);
  taskCard.append(name);
  taskCard.append(dueDate);
  taskCard.append(removeTask);
  complete.addEventListener("click", (event) => {
    event.stopPropagation();
    task.toggleComplete();
    displayTasks(project);
  });
  removeTask.addEventListener("click", (event) => {
    project.removeTask(task);
    event.stopPropagation();
  });
  content.append(taskCard);
  taskCard.addEventListener("click", () => {
    displayTaskCard(task);
  });
  checkPriority(task.taskPriority, taskCard);
  checkComplete(task.completed, taskCard);
};
