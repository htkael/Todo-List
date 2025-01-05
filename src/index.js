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
import { clearTaskDisplay, displayTasks } from "./displayTasks";

export const myProjectManager = new projectManager();
let myProjects = myProjectManager.projects;
console.log(myProjects);

const addProjectBtn = document.querySelector("#addProject");
const projectForm = document.querySelector("#projectForm");
const taskForm = document.querySelector("#taskForm");

let currentProject;
export const setCurrentProject = (project) => {
  currentProject = project;
};

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  displayProjects();
  currentProject = myProjectManager.projects[0];
  clearTaskDisplay();
});

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
});

taskForm.addEventListener("submit", (event) => {
  if (currentProject) {
    currentProject.addTask(event);
    displayTasks(currentProject);
    closeModal();
  }
});

export const saveToLocalStorage = () => {
  localStorage.setItem(
    "todoAppProjects",
    JSON.stringify(myProjectManager.projects.map((project) => project.toJSON()))
  );
};

const loadFromLocalStorage = () => {
  const storedProjects = localStorage.getItem("todoAppProjects");
  if (storedProjects) {
    const parsedProjects = JSON.parse(storedProjects);
    myProjectManager.projects = [];
    parsedProjects.forEach((projectData) => {
      myProjectManager.addProjectFromData(projectData.name, projectData.tasks);
    });
  } else {
    myProjectManager.projects = [];
  }
};
