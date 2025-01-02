import { displayTasks } from "./displayTasks";
import { Project } from "./project";
import { displayProjects } from "./ui";

export const projects = [];

export const addProject = () => {
  const name = prompt("Project Name?");
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
