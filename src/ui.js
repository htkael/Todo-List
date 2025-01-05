import { myProjectManager, setCurrentProject } from ".";
import { displayTasks } from "./displayTasks";
import { clearTaskDisplay } from "./displayTasks";

const projectList = document.querySelector(".projectList");

export const displayProjects = () => {
  const projects = myProjectManager.projects;
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const newProject = document.createElement("div");
    newProject.addEventListener("click", () => {
      setCurrentProject(project);
      displayTasks(project);
    });

    const newProjectText = document.createElement("div");
    newProjectText.textContent = `${project.name}`;
    newProject.append(newProjectText);

    const projectName = project.name;
    const newDelete = document.createElement("button");
    newDelete.textContent = "Delete Project";
    newProject.append(newDelete);
    newDelete.addEventListener("click", (event) => {
      event.stopPropagation();
      myProjectManager.removeProject(projectName);
      displayProjects();
      clearTaskDisplay();
    });

    projectList.append(newProject);
  });
};
