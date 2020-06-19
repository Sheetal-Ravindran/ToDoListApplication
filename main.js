const ENTER_KEY = 13;

//Perform add function when we press enter
document.querySelector("#myInput").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === ENTER_KEY) {
    createNewElement();
  }
});

// Create a new list item when clicking on the "Add" button
function createNewElement() {
  const inputValue = document.querySelector("#myInput").value;
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";

  const li = document.createElement("li");
  const textNode = document.createTextNode(inputValue);
  li.appendChild(checkbox);
  li.appendChild(textNode);

  document.getElementById("myList").appendChild(li);
  document.getElementById("myInput").value = "";

  const span = document.createElement("button");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = closeClick;
  li.appendChild(span);
}

function closeClick(event) {
  const listItem = event.currentTarget.parentElement;
  const container = listItem.parentElement;
  container.removeChild(listItem);
}
