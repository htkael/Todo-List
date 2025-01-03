export const content = document.querySelector(".taskList");
export const createTaskCard = (task, project) => {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  const complete = document.createElement("input");
  complete.type = "checkbox";
  complete.checked = task.completed;
  const name = document.createElement("h2");
  const dueDate = document.createElement("div");
  const removeTask = document.createElement("button");
  removeTask.textContent = "Remove Task";
  name.textContent = task.taskName;
  dueDate.textContent = `Due: ${task.taskDate}`;
  taskCard.append(complete);
  taskCard.append(name);
  taskCard.append(dueDate);
  taskCard.append(removeTask);
  complete.addEventListener("click", () => {
    task.toggleComplete();
  });
  removeTask.addEventListener("click", () => {
    project.removeTask(task);
  });
  content.append(taskCard);
  console.log(task);
};
