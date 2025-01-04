import { Project } from "./project";
import { displayProjects } from "./ui";
import { displayTasks } from "./displayTasks";
import { saveToLocalStorage } from ".";
import { Task } from "./task";

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
    saveToLocalStorage();
    return newProject;
  }

  addProjectFromData(name, tasks) {
    const newProject = new Project(name);
    tasks.forEach((taskData) => {
      const task = new Task(
        taskData.taskName,
        taskData.taskDesc,
        taskData.taskDate,
        taskData.taskPriority,
        newProject
      );
      newProject.tasks.push(task);
    });
    this.projects.push(newProject);
    saveToLocalStorage();
    return newProject;
  }

  removeProject(projectName) {
    const index = this.projects.findIndex(
      (project) => project.name === projectName
    );
    this.projects[index].tasks = [];
    this.projects.splice(index, 1);
    saveToLocalStorage();
    displayProjects();
    displayTasks(this.projects[index]);
  }
}
