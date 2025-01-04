import "./styles.css";
import { projectManager } from "./addProject";
import {
  displayProjectModal,
  closeProjectModal,
  closeTaskModal,
  closeModal,
  closeTaskCardModal,
  closeEditTaskModal,
} from "./modals";
import { displayProjects } from "./ui";
import { displayTasks } from "./displayTasks";

export const myProjectManager = new projectManager();

const addProjectBtn = document.querySelector("#addProject");
const projectForm = document.querySelector("#projectForm");
const taskForm = document.querySelector("#taskForm");

let currentProject;

addProjectBtn.addEventListener("click", () => {
  displayProjectModal();
});

window.addEventListener("click", () => {
  closeProjectModal(event);
  closeTaskModal(event);
  closeTaskCardModal(event);
  closeEditTaskModal(event);
});

projectForm.addEventListener("submit", () => {
  currentProject = myProjectManager.addProject(event);
  displayProjects();
  displayTasks(currentProject);
  console.log(currentProject);
});

taskForm.addEventListener("submit", () => {
  if (currentProject) {
    currentProject.addTask(event);
    displayTasks(currentProject);
    closeModal();
  }
});

console.log(myProjectManager);
