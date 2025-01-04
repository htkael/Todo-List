import { createElement, createTaskSection } from "./utils";
const projectModal = document.querySelector("#projectModal");
const taskModal = document.querySelector("#taskModal");
const projectSpan = document.querySelector("#close");
const taskSpan = document.querySelector("#closeTwo");
const taskCardSpan = document.querySelector("#closeThree");
const projectCloseButton = document.querySelector("#closeButton");
const taskCloseButton = document.querySelector("#closeButtonTwo");
const taskCard = document.querySelector("#taskCard");
const taskCardModal = document.querySelector("#taskCardModal");

export const displayProjectModal = () => {
  projectModal.style.display = "grid";
};

export const displayTaskModal = () => {
  taskModal.style.display = "grid";
};

export const displayTaskCard = (task) => {
  taskCardModal.style.display = "grid";
  taskCard.innerHTML = "";
  const taskName = createElement("h2", ["taskName"], `${task.taskName}`);
  const taskDesc = createTaskSection("Description:", `${task.taskDesc}`);
  const taskDate = createTaskSection("Due:", `${task.taskDate}`);
  const taskPriority = createTaskSection("Priority:", `${task.taskPriority}`);

  taskCard.append(taskName);
  taskCard.append(taskDesc);
  taskCard.append(taskDate);
  taskCard.append(taskPriority);
};

export const closeModal = () => {
  taskModal.style.display = "none";
};
export const closeProjectModal = (event) => {
  const target = event.target;
  if (
    target === projectModal ||
    target === projectSpan ||
    target === projectCloseButton
  ) {
    event.preventDefault();
    projectModal.style.display = "none";
  }
};

export const closeTaskModal = (event) => {
  const target = event.target;
  if (
    target === taskModal ||
    target === taskSpan ||
    target === taskCloseButton
  ) {
    event.preventDefault();
    taskModal.style.display = "none";
  }
};

export const closeTaskCardModal = (event) => {
  const target = event.target;
  if (target === taskCardModal || target === taskCardSpan) {
    taskCardModal.style.display = "none";
  }
};
