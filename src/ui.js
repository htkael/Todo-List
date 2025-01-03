import { myProjectManager } from ".";
import { displayTasks } from "./displayTasks";

const projectList = document.querySelector(".projectList");

export const displayProjects = () => {
  const projects = myProjectManager.projects;
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const newProject = document.createElement("div");
    newProject.addEventListener("click", () => {
      displayTasks(project);
    });

    const newProjectText = document.createElement("div");
    newProjectText.textContent = `${project.name}`;
    newProject.append(newProjectText);

    const projectName = project.name;
    const newDelete = document.createElement("button");
    newDelete.textContent = "Delete Project";
    newProject.append(newDelete);
    newDelete.addEventListener("click", () => {
      myProjectManager.removeProject(projectName);
    });

    projectList.append(newProject);
  });
};
