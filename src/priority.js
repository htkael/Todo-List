export const checkPriority = (priority, taskCard) => {
  if (priority === "low") {
    taskCard.classList.add("low");
  } else if (priority === "medium") {
    taskCard.classList.add("medium");
  } else if (priority === "high") {
    taskCard.classList.add("high");
  }
};

export const checkComplete = (complete, taskCard) => {
  console.log(complete);
  if (complete === true) {
    taskCard.classList.add("completed");
  } else {
    taskCard.classList.remove("completed");
  }
};
