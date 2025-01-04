import { displayTasks } from "./displayTasks";
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
const editTaskForm = document.querySelector("#editTaskForm");
const editTaskModal = document.querySelector("#editTaskModal");
const editTaskSpan = document.querySelector("#closeFour");

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
  const editButton = createElement("button", ["edit"], "Edit");

  editButton.addEventListener("click", () => {
    taskCardModal.style.display = "none";
    openEditTaskModal(task);
  });

  taskCard.append(taskName);
  taskCard.append(taskDesc);
  taskCard.append(taskDate);
  taskCard.append(taskPriority);
  taskCard.append(editButton);
};

const openEditTaskModal = (task) => {
  const editTaskName = document.querySelector("#editTaskName");
  const editTaskDesc = document.querySelector("#editTaskDesc");
  const editTaskDate = document.querySelector("#editTaskDate");
  const editTaskPriority = document.querySelector("#editTaskPriority");

  editTaskName.value = task.taskName;
  editTaskDesc.value = task.taskDesc;
  editTaskDate.value = task.taskDate;
  editTaskPriority.value = task.taskPriority;

  editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    task.editTaskInfo(
      editTaskName.value,
      editTaskDesc.value,
      editTaskDate.value,
      editTaskPriority.value
    );
    closeEditTaskModalSub();
    displayTasks(task.project);
    displayTaskCard(task);
  });

  editTaskModal.style.display = "grid";
};

export const closeEditTaskModalSub = () => {
  editTaskModal.style.display = "none";
  taskCardModal.style.display = "grid";
  editTaskForm.removeEventListener("submit", (event) => {
    event.preventDefault();

    task.editTaskInfo(
      editTaskName.value,
      editTaskDesc.value,
      editTaskDate.value,
      editTaskPriority.value
    );
    closeEditTaskModalSub();
  });
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

export const closeEditTaskModal = (event) => {
  const target = event.target;
  if (target === editTaskModal || target === editTaskSpan) {
    editTaskModal.style.display = "none";
    taskCardModal.style.display = "grid";
  }
};
