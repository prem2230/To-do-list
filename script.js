const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click",addTask);

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText!==''){
        const taskItem = document.createElement("li");
    taskItem.innerHTML=`
    <input type = checkbox>
    <span> ${taskText}</span> <button class="delBtn">Delete</button>`;
    taskList.appendChild(taskItem);
    taskInput.value='';
    deleteTask(taskItem);
}}

function deleteTask(taskItem){
    const delBtn = taskItem.querySelector(".delBtn");
    delBtn.addEventListener("click",() => {
    taskItem.remove();
})}