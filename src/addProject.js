import { Project } from "./project";
import { displayProjects } from "./ui";
import { displayTasks } from "./displayTasks";

const modal = document.querySelector("#projectModal");

export class projectManager {
  constructor() {
    this.projects = [];
  }

  addProject(event) {
    event.preventDefault();
    const projectName = document.querySelector("#projectName");
    const name = projectName.value;
    projectName.value = "";
    modal.style.display = "none";
    const newProject = new Project(name);
    this.projects.push(newProject);
    return newProject;
  }

  removeProject(projectName) {
    const index = this.projects.findIndex(
      (project) => project.name === projectName
    );
    this.projects[index].tasks = [];
    this.projects.splice(index, 1);
    displayProjects();
    displayTasks(this.projects[index]);
  }
}
