import { displayTasks } from "./displayTasks";
import { Project } from "./project";
import { displayProjects } from "./ui";

const modal = document.querySelector("#projectModal");
export const projects = [];

export const addProject = (event) => {
  event.preventDefault();
  const projectName = document.querySelector("#projectName");
  const name = projectName.value;
  projectName.value = "";
  modal.style.display = "none";
  const newProject = new Project(name);
  projects.push(newProject);
  displayProjects();
  displayTasks(newProject);
  console.log(newProject);
};

export const removeProject = (projectName) => {
  const index = projects.findIndex((project) => project.name === projectName);
  projects.splice(index, 1);
  displayProjects();
};
