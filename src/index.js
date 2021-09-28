document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(`#create-task-form`);
  form.addEventListener(`submit`, newTask);
});

const newTask = function (event) {
  event.preventDefault();
  let input = event.target[`new-task-description`].value;
  appendTask(input);

  event.target[`new-task-description`].value = ``;
};

const appendTask = function (input) {
  let ul = document.querySelector(`#tasks`);
  let li = document.createElement(`li`);

  li.innerText = input;

  ul.appendChild(li);
};
