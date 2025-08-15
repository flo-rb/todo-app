//TODO: Array for later (reloading page etc)
//TODO: clear input after adding a task
//TODO: Toggle mode.

// const tasks = [];

function addTask(event) {
    event.preventDefault();

    // List creation
    const newList = document.createElement("li");
    newList.className = "list";

    // Content
    const checkTask = document.createElement("input");
    checkTask.type = "checkbox";

    const textTask = document.createElement("p");
    const input = document.getElementById("task-input").value;
    textTask.textContent = input;

    // Verification if empty
    if (input.trim() === '') {
        alert('Veuillez entrer une tâche !');
        return;
    }

    const delTask = document.createElement("button");
    delTask.className = "del-btn"
    delTask.textContent = "+";

    newList.appendChild(checkTask);
    newList.appendChild(textTask);
    newList.appendChild(delTask);

    document.getElementById("all-lists").appendChild(newList);

    //Adding tasks to the array
    // const taskObj = { text: input, done: false };
    // tasks.push(taskObj);

    // Checking tasks
    function checkingTask() {
        // taskObj.done = checkTask.checked;

        if (checkTask.checked) {
            textTask.style.textDecoration = "line-through";
        } else {
            textTask.style.textDecoration = "none";
        }
    };

    checkTask.addEventListener("change", checkingTask);

    function deleteTask() {
        newList.remove();
    }

    delTask.addEventListener("click", deleteTask);

}