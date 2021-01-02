const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class addTask
{
    constructor(taskName)
    {
        this.createDiv(taskName);
    }

    createDiv(taskName)
    {
        
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        let addedTask = document.createElement('input');
        addedTask.value = taskName;
        addedTask.disabled = true;
        addedTask.classList.add('item_input');
        addedTask.type = 'text';

        let editButton = document.createElement('button');
        let editIcon = document.createElement('i');
        editButton.classList.add('editButton');
        editIcon.classList.add('fa');
        editIcon.classList.add('fa-pencil-square-o');

        let deleteButton = document.createElement('button');
        let deleteIcon = document.createElement('i');
        deleteButton.classList.add('deleteButton');
        deleteIcon.classList.add('fa');
        deleteIcon.classList.add('fa-trash');

        container.appendChild(itemBox);
        itemBox.appendChild(addedTask);
        itemBox.appendChild(editButton);
        itemBox.appendChild(deleteButton);
        editButton.appendChild(editIcon);
        deleteButton.appendChild(deleteIcon);

        editButton.addEventListener('click', ()=>
        {
            addedTask.disabled = !addedTask.disabled;
            if(editButton.innerHTML=='EDIT')
                editButton.innerHTML='SAVE';
            else
                editButton.innerHTML='EDIT';
        });

        deleteButton.addEventListener('click',()=>
        {
            container.removeChild(itemBox);
        });

    }
}

addButton.addEventListener('click', ()=>
{
    if(input.value!='')
        new addTask(input.value);
        input.value = '';
});

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addButton.click();
  }
});