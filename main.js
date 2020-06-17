// Create a "close" button and append it to each list item
var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = closeClick;
  myNodeList[i].appendChild(span);

  var checkbox = myNodeList[i].querySelector('input[type="checkbox"]');
  checkbox.addEventListener('click', function(event) {
      var parent = event.currentTarget.parentElement;
      parent.classList.toggle('checked');
  });
}

// Create a new list item when clicking on the "Add" button
function createNewElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";

  var li = document.createElement("li");
  var textNode = document.createTextNode(inputValue);
  li.appendChild(checkbox);
  li.appendChild(textNode);

  document.getElementById("myList").appendChild(li);
  document.getElementById("myInput").value = "";

  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = closeClick;
  li.appendChild(span);
}

function closeClick() {
  var div = this.parentElement;
  div.style.display = "none";
}