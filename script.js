//Variaveis
const btnAdd = document.querySelector(".btnAdd");
const taskInput = document.querySelector(".taskInput");
const todoList = document.querySelector(".todo");


//Funções
const saveTodo = (text) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("tasks");
    
    const todoTitle = document.createElement("p");
    todoTitle.innerText = text;

    taskDiv.append(todoTitle);

    const buttonWrapper = document.createElement("span");
    buttonWrapper.classList.add("btnWrapper");
    
    taskDiv.append(buttonWrapper);

    const btnCompleted = document.createElement("button");
    btnCompleted.classList.add("btnCompleted", "btn");
    btnCompleted.innerHTML = '<i class="bx bx-check completedIcon"> </i>';

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btnEdit", "btn");
    btnEdit.innerHTML = '<i class="bx bxs-edit-alt editIcon"> </i>';

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btnDelete", "btn");
    btnDelete.innerHTML = '<i class="bx bxs-trash trashIcon"> </i>';

    buttonWrapper.append(btnCompleted, btnEdit, btnDelete);

    todoList.append(taskDiv);
    taskInput.value = '';
    taskInput.focus();
}

//Eventos
 btnAdd.addEventListener("click", (e)=>{
    e.preventDefault();

    const inputValue = taskInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
 })

 document.addEventListener("click", (e)=>{
    const targetElement = e.target;
    const parentElement = targetElement.closest("div");

    if(targetElement.classList.contains("btnCompleted") || targetElement.classList.contains("completedIcon")){
        parentElement.classList.toggle("completed");
    }

    if(targetElement.classList.contains("btnDelete") || targetElement.classList.contains("trashIcon")){
        parentElement.remove();
    }
 })