const btnAddTask = document.getElementById('btnAddTask');
const btnSearch = document.getElementById('searchButton');
const btnFilter = document.getElementById('filterButton');

btnAddTask.addEventListener('click', addTask);
/*
btnSearch.addEventListener('click', searchTask);
btnFilter.addEventListener('click', filterTask);
*/

let tasks = []

function addTask(){
    let taskInput = document.getElementById('newTask').value;
    
    if(taskInput !== ''){
        
        tasks.push(taskInput);
        taskInput.value = '';
        renderTaskList();
        console.log(taskInput)
    }
    else{
        alert('Digite uma tarefa válida');
    }
}

console.log(tasks.length);

/*
function searchTask(){

}

function filterTask(){

} */
