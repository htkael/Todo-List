import { projects, removeProject } from "./addProject";

const projectList = document.querySelector(".projectList");

export const displayProjects = () => {
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const newProject = document.createElement("div");
    newProject.textContent = `${project.name}`;
    projectList.append(newProject);
    const projectName = project.name;
    const newDelete = document.createElement("button");
    projectList.append(newDelete);
    newDelete.addEventListener("click", () => {
      removeProject(projectName);
    });
  });
};
