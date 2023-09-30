const toDoList = [];
renderTask();

function addTask() {
    const inputTask = document.querySelector('.input-task');
    const name = inputTask.value;
   
    const inputdueDate = document.querySelector('.js-dueDate-input');
    const dueDate = inputdueDate.value;
   
    if (name !== '' && dueDate !== '') {
        toDoList.push({
            name, 
            dueDate,
        });
        inputTask.value = '';
        inputdueDate.value = '';
        renderTask();
    } else{
        alert('PLs enter a task')
    }
}

function renderTask() {
    let todoListhtml = '';

    if (toDoList.length === 0) {
        todoListhtml = `<div>Add a todo task</div>`;
    } else {
        for (let i = 0; i < toDoList.length; i++) {
            const todoObject = toDoList[i];
            const { name, dueDate } = todoObject;
            let html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-task-btn" onclick="deleteTask(${i})">Delete</button>
            `;
            todoListhtml += html;
        }
    }

    document.querySelector('.js-task').innerHTML = todoListhtml;
}

function deleteTask(index) {
    toDoList.splice(index, 1);
    renderTask();
}
console.log(toDoList);