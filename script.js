const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-list");

function addTask() {
    if (inputBox.value === '') {
        alert("You need to write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        // Set the background image class for the body (replace "task-background-1" with the desired class for the task background)
        const backgroundImageClasses = [
            "task-background-1",
            "task-background-2",
            "task-background-3",
            "task-background-4",
            "task-background-5"
        ];
        const randomBackgroundClass = backgroundImageClasses[Math.floor(Math.random() * backgroundImageClasses.length)];
        document.body.className = randomBackgroundClass;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();z