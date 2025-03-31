const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("task-button-small");
    deleteButton.onclick = () => deleteTask(taskItem);
    taskItem.appendChild(deleteButton);

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Complete";
    toggleButton.classList.add("task-button-small");
    toggleButton.onclick = () => toggleTaskComplete(taskItem);
    taskItem.appendChild(toggleButton);

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

// Delete a task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Mark task as completed
function toggleTaskComplete(taskItem) {
    taskItem.classList.toggle("completed");
}
