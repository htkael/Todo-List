const projectModal = document.querySelector("#projectModal");
const taskModal = document.querySelector("#taskModal");
const projectSpan = document.querySelector("#close");
const taskSpan = document.querySelector("#closeTwo");
const projectCloseButton = document.querySelector("#closeButton");
const taskCloseButton = document.querySelector("#closeButtonTwo");

export const displayProjectModal = () => {
  projectModal.style.display = "grid";
};

export const displayTaskModal = () => {
  taskModal.style.display = "grid";
};

export const closeProjectModal = (event) => {
  const target = event.target;
  if (
    target === projectModal ||
    target === projectSpan ||
    target === projectCloseButton
  ) {
    event.preventDefault();
    projectModal.style.display = "none";
  }
};

export const closeTaskModal = (event) => {
  const target = event.target;
  if (
    target === taskModal ||
    target === taskSpan ||
    target === taskCloseButton
  ) {
    event.preventDefault();
    taskModal.style.display = "none";
  }
};
