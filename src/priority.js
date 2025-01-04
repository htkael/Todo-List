export const checkPriority = (priority, taskCard) => {
  if (priority === "low") {
    taskCard.classList.add("low");
  } else if (priority === "medium") {
    taskCard.classList.add("medium");
  } else if (priority === "high") {
    taskCard.classList.add("high");
  }
};
