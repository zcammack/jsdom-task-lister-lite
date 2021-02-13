document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("create-task-form").addEventListener("submit", 
  function(event) { 
    event.preventDefault();
}, false);

  document.getElementById("create-task-form").addEventListener('submit', addTask); 
  
  function addTask() {
    let task = document.getElementById("new-task-description").value;
    let li = document.createElement("li");
    li.innerText = task
    document.getElementById("tasks").appendChild(li);
  }
});
