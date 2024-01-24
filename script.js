/*document.querySelector ('#push').onclick = function() {
   if (document.querySelector ('#newtask input').value.length == 0) {
    alert("Please Enter a Task")
   }
   else {
    document.querySelector('#tasks').innerHTML += `
    <div class="task"> 
    <span id="taskname">
    ${document.querySelector('#newtask input').value}
    </span>

    <button class="delete">
    <i class=""></i>
    </button>
    </div>`;
    
   }
}*/
document.querySelector('#add').onclick = function() {
    const newTaskInput = document.querySelector('#newtask input');
    if (newTaskInput.value.length ===0) {
        alert ("Kindly, enter a Task");
    }
    else {
        const taskName = newTaskInput.value;

        const newTaskElement =document.createElement('div');
        newTaskElement.classList.add('task');

        const taskNameSpan = document.createElement('span');
        taskNameSpan.id = 'taskName'
        taskNameSpan.textContent = taskName;

        const deleteButton = document.createElement ('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        newTaskElement.appendChild(taskNameSpan);
        newTaskElement.appendChild(deleteButton)

        document.querySelector('#tasks').appendChild(newTaskElement);

        deleteButton.onclick = function() {
            newTaskElement.remove();
        };
        newTaskInput.value = ""
    }
}
fetch ("https://jsonplaceholder.typicode.com/todos/1")
.then (response => response.json())
.then (data=> console.log(data))
 .catch(error=> console.log(error))