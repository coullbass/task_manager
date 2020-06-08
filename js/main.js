//Получение объектов верстки
let newToDoBtn = document.getElementById("newToDoBtn"); // получение объекта кнопки создания новой задачи
let toDoTitle = document.getElementById("toDoTitle"); // получение объекта заголовка задачи
let toDoText = document.getElementById("toDoTextInput"); // получение объекта заголовка текста задачи
let toDoList = document.getElementById("toDoList"); // получение объекта списка задач
let tasks = {}; // пустой объект задачи

let taskCount = 0;
newToDoBtn.addEventListener("click", createNewTask)

      
    function createNewTask(){
        let taskNode = document.createElement("li");// создание ичейки в списке задач
        taskNode.id = taskCount++;
        
        let completCheck = document.createElement("input");
        completCheck.type = "checkbox";
        completCheck.id = "check_" + taskNode.id

        let completBtn = document.createElement("input");
        completBtn.type = "button";

        completBtn.dateid = taskNode.id
        completBtn.value = 'end task'

        let taskTitleTeg = document.createElement("p");
        taskTitleTeg.className = 'task-title'

        let taskTextTeg = document.createElement("p");
        taskTextTeg.className = 'task-text'

        taskTitleTeg.innerText = toDoTitle.value;
        toDoTitle.value = '';
        taskTextTeg.innerText = toDoText.value;
        toDoText.value = '';

        taskNode.appendChild(completCheck);
        taskNode.appendChild(taskTitleTeg);
        taskNode.appendChild(taskTextTeg);
        taskNode.appendChild(completBtn);

        toDoList.appendChild(taskNode);
        tasks[taskCount] = taskNode
        console.log(tasks)
        return taskNode;
    }


    toDoList.addEventListener('click', (event)=>{
        if (event.target.type == "button") {
            let task = event.target.closest('li');
            let checkID = "check_" + task.id;
            let check = document.getElementById(checkID);

        if (check.checked){
            task.parentNode.removeChild(task);                  
        };
        
        };  
    });
