import "./styles.css";
import { addProject } from "./addProject";

const addProjectBtn = document.querySelector("#addProject");

addProjectBtn.addEventListener("click", () => {
  addProject();
});
