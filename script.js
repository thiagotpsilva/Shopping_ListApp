const input = document.getElementById('item-input');
const category = document.getElementById('category-input');
const listItems = document.getElementById('item-list');
const addItemBtn = document.getElementById('add-item');
const removeAllBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
// Edit mode
let isEditMode = false;
const itemForm = document.getElementById('item-form');
const formBtn = itemForm.querySelector('button');

// console.log(addItemBtn);

// Add new Item function
function addNewItem(e) {
  e.preventDefault();
  itemInput = input.value;
  categoryInput = category.value;

  // Clear the fields
  input.value = '';
  category.value = '0';

  //Create and Append List Item
  const li = document.createElement('li');
  li.className = 'item';
  itemText = document.createTextNode(`${itemInput}`);
  li.appendChild(itemText);
  listItems.appendChild(li);

  // Create and append the span category
  const span = document.createElement('span');
  span.className = 'category';
  spanCategory = document.createTextNode(`${categoryInput}`);
  span.appendChild(spanCategory);
  li.appendChild(span);

  //Create and Append Button
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  li.appendChild(button);

  //Create and Append Icon
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  button.appendChild(icon);

  if (categoryInput == 'Alimentação') {
    li.style.backgroundColor = '#ccc';
  } else if (categoryInput == 'Higiene Pessoal') {
    li.style.backgroundColor = 'green';
    li.style.color = 'white';
  }
}

// Remove All function
function removeAll() {
  const itemsRemove = Array.from(listItems.children);
  itemsRemove.forEach((item) => {
    // console.log(item);
    item.remove();
  });
  filter.remove();
  // removeAllBtn.remove();
}

// Remove Item function
function removeItem(e) {
  const currentItem = e.target.parentElement.parentElement;
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Deseja excluir esse item da lista?')) {
      currentItem.remove();
    }
    // Edit mode
  } else {
    setItemToEdit(e.target);
  }
}

// Edit Item function
// function setItemToEdit(item) {
//   isEditMode = true;
//   listItems.querySelectorAll('li').forEach((item) => {
//     item.classList.remove('edit-mode');
//   });
//   item.classList.add('edit-mode');
//   formBtn.innerHTML = '<i class = "fa-solid fa-pen"></i> Update Item';
//   formBtn.style.backgroundColor = '#228b22';
//   input.value = item.textContent;
// }

// Check for edit mode

// if (isEditMode) {
//   const itemToEdit = listItems.querySelector('edit-mode');
//   itemToEdit.classList.remove('edit-mode');
//   itemToEdit.remove();
//   isEditMode = false;
// }
// Event Listeners
addItemBtn.addEventListener('click', addNewItem);
removeAllBtn.addEventListener('click', removeAll);
listItems.addEventListener('click', removeItem);
