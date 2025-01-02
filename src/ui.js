import { projects, removeProject } from "./addProject";
import { displayTasks } from "./displayTasks";

const projectList = document.querySelector(".projectList");

export const displayProjects = () => {
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
    newProject.append(newDelete);
    newDelete.addEventListener("click", () => {
      removeProject(projectName);
    });

    projectList.append(newProject);
  });
};
