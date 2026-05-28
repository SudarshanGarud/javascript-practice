let tasks = []

const inputTask = document.getElementById("inputTask")

const addTask = document.getElementById("addTask")
addTask.addEventListener("click", () => {
    if (inputTask.value === "") {
        return
    }
    
    tasks.push(inputTask.value)

    renderTasks()

    inputTask.value = ""
})

const taskList = document.getElementById("taskList")

function renderTasks() {
    taskList.innerHTML = ""
    tasks.forEach((task, index) => {
        const li = document.createElement("li")

        li.textContent = task

        const deleteBtn = document.createElement("Button")
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1)
            renderTasks()
        })

        li.appendChild(deleteBtn)
        taskList.appendChild(li)
    })
}

inputTask.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask.click()
    }
})