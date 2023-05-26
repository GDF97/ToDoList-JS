const btnAddTask = document.querySelector(".btnAdd");
const btnShow = document.querySelector(".showVector");
let checkIcon = document.createElement("i");
let editIcon = document.createElement("i");
let deleteIcon = document.createElement("i");
checkIcon.classList.add("bx", "bx-check")
let todoDiv = document.querySelector(".todo");
let task = [];

btnAddTask.addEventListener('click', addTask);

function addTask(){
    let taskInput = document.getElementById("taskInput");
    if(taskInput.value === ""){
        alert("Digite uma tarefa válida");
    }
    else{
        task.push(taskInput.value);
        showTasksInHTML();
        taskInput.value = "";
    }
}

function showTasksInHTML(){
    console.clear();
    todoDiv.innerHTML = "";
    for(let i = 0; i < task.length; i++){
        let checkIcon = document.createElement("i");
        let editIcon = document.createElement("i");
        let deleteIcon = document.createElement("i");
        checkIcon.classList.add("bx", "bx-check");
        editIcon.classList.add("bx", "bxs-edit-alt");
        deleteIcon.classList.add("bx", "bxs-trash");

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("tasks");
        let taskItem = document.createElement("p");
        taskItem.textContent = task[i];
        let buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("btnWrapper");
        let buttonDelete = document.createElement("button");
        buttonDelete.classList.add("btn","btnDelete");
        let buttonCompleted = document.createElement("button");
        buttonCompleted.classList.add("btn","btnCompleted");
        let buttonEdit = document.createElement("button");
        buttonEdit.classList.add("btn", "btnEdit");

        todoDiv.append(taskDiv);
        taskDiv.append(taskItem);
        taskDiv.append(buttonWrapper);
        
        buttonWrapper.append(buttonCompleted);
        buttonWrapper.append(buttonEdit);
        buttonWrapper.append(buttonDelete);

        buttonCompleted.append(checkIcon);
        buttonEdit.append(editIcon);
        buttonDelete.append(deleteIcon);
        console.log(task[i]);
    }
}

