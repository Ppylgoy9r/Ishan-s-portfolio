const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value;
    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        newTaskInput.value = "";
    }
});
