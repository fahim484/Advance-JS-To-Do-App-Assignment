const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#add-btn");
const listContainer = document.querySelector("#list-container");

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.classList.add("li");
    li.innerHTML = `${listContainer.children.length + 1}. ${inputBox.value}`;

    let div = document.createElement("div");
    div.classList.add("div");

    // Create Edit Button
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = "&#9997;";
    div.appendChild(editBtn);

    // Create Delete Button
    let span = document.createElement("span");
    span.classList.add("span-btn");
    span.innerHTML = "\u00d7";
    div.appendChild(span);

    li.appendChild(div);
    listContainer.appendChild(li);
    inputBox.value = "";
  }
});

listContainer.addEventListener(
  "click",
  (event) => {
    if (event.target.classList.contains("span-btn")) {
      event.target.parentElement.parentElement.remove();
    } else if (event.target.classList.contains("edit-btn")) {
      editItem(event.target.parentElement.parentElement);
    }
  },
  false
);

function editItem(item) {
  let currentText = item.childNodes[0].textContent.split(". ")[1]; 
  let inputField = document.createElement("input");
  inputField.classList.add("li-input");
  inputField.type = "text";
  inputField.value = currentText;
  item.innerHTML = "";
  item.appendChild(inputField);

  // Create Save Button
  let saveBtn = document.createElement("button");
  saveBtn.classList.add("save-btn");
  saveBtn.innerHTML = "&#9989;";
  item.appendChild(saveBtn);

  // Create Delete Button
  let span = document.createElement("span");
  span.classList.add("span-btn");
  span.innerHTML = "\u00d7";
  item.appendChild(span);

  saveBtn.addEventListener("click", () => {
    item.innerHTML = `${
      Array.from(listContainer.children).indexOf(item) + 1
    }. ${inputField.value}`; // Corrected: Preserve the item numbering and text

    let div = document.createElement("div");
    div.classList.add("div");

    // Re-add Edit Button
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = "&#9997;";
    div.appendChild(editBtn);

    // Re-add Delete Button
    let span = document.createElement("span");
    span.classList.add("span-btn");
    span.innerHTML = "\u00d7";
    div.appendChild(span);

    item.appendChild(div);
  });
}


