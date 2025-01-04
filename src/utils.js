export const createElement = (tag, classes = [], textContent = "") => {
  const element = document.createElement(tag);
  if (classes.length) {
    element.classList.add(...classes);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
};

export const createTaskSection = (headerName, property) => {
  const div = createElement("div", ["cardInfo"]);
  const header = createElement("div", ["headerName"], `${headerName}`);
  const info = createElement("div", [], `${property}`);
  div.append(header);
  div.append(info);
  return div;
};
