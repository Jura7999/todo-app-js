const button = document.querySelector("#button");
const inputField = document.querySelector("#input");
const taskContainer = document.querySelector("#Task-List");

function addTask() {
  const aktuellerTask = inputField.value;
  if (aktuellerTask.trim() === "") {
    alert("Du brauchst einen Wert, Dumpfbacke!");
    return;
  }
  let neuerTask = document.createElement("li");
  neuerTask.classList.add("task");

  let spantext = document.createElement("span");
  spantext.textContent = aktuellerTask;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "❌";

  neuerTask.append(spantext);
  neuerTask.append(deleteButton);

  taskContainer.append(neuerTask);

  inputField.value = "";
}

taskContainer.addEventListener("click", function (event) {
  let auswahlObjekt = event.target;

  if (auswahlObjekt.classList.contains("delete-button")) {
    let gelöschtesItem = auswahlObjekt.parentElement;
    gelöschtesItem.remove();
  }

  if (auswahlObjekt.tagName === "SPAN") {
    auswahlObjekt.classList.toggle("taskfinish");
  }
});

button.addEventListener("click", addTask);
