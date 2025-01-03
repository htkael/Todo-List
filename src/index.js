import "./styles.css";
import { addProject } from "./addProject";
import {
  displayProjectModal,
  closeProjectModal,
  closeTaskModal,
} from "./modals";

const addProjectBtn = document.querySelector("#addProject");
const projectForm = document.querySelector("#projectForm");

addProjectBtn.addEventListener("click", () => {
  displayProjectModal();
});

window.addEventListener("click", () => {
  closeProjectModal(event);
  closeTaskModal(event);
});

projectForm.addEventListener("submit", () => addProject(event));
