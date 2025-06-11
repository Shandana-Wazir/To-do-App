function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const list = document.getElementById("todo-list");
  const li = document.createElement("li");

  li.innerHTML = `
    ${taskText} 
    <button onclick="removeTask(this)">x</button>
  `;

  list.appendChild(li);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
