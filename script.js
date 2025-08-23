const button = document.querySelector("#button");
const inputField = document.querySelector("#input");
const taskContainer = document.querySelector("#Task-List");

function addTask() {
  const aktuellerTask = inputField.value;
  if (aktuellerTask.trim() === "") {
    alert("Du brauchst einen Wert, Dumpfbacke!");
    return;
  } else {
    let neuerTask = document.createElement("li");

    taskContainer.append(neuerTask);

    neuerTask.textContent = inputField.value;

    neuerTask.classList.add("task");

    inputField.value = "";
  }
}

button.addEventListener("click", addTask);
