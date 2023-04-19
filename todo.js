let id = 0;
const newStartDateInput = document.getElementById('new-start-date');
const newEndDateInput = document.getElementById('new-end-date');
const newTaskInput = document.getElementById('new-task');
const listTable = document.getElementById('list');

document.getElementById('add').addEventListener('click', createNewToDoItem);

function createNewToDoItem() {
  const createdDate = new Date();
  const newRow = listTable.insertRow(1);
  newRow.setAttribute('id', `item-${id}`);
  newRow.insertCell(0).innerHTML = newTaskInput.value;
  newRow.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
  newRow.insertCell(2).innerHTML = newStartDateInput.value;
  newRow.insertCell(3).innerHTML = newEndDateInput.value;
  const actionsCell = newRow.insertCell(4);
  actionsCell.appendChild(createDeleteButton(id));
  newTaskInput.value = '';
  id++;
}

function createDeleteButton(id) {
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.id = id;
  btn.innerHTML = 'Delete';
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    const elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
