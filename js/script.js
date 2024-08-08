const input = document.getElementById('item-input');
const category = document.getElementById('category-input');
const listItems = document.getElementById('item-list');
const addItemBtn = document.getElementById('add-item');
const removeAllBtn = document.getElementById('clear');
const filter = document.getElementById('filter');

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
}

// Remove All function
function removeAll() {
  const itemsRemove = Array.from(listItems.children);
  itemsRemove.forEach((item) => {
    // console.log(item);
    item.remove();
  });
  filter.remove();
}

// Remove Item function
function removeItem(e) {
  const currentItem = e.target.parentElement.parentElement;
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Deseja excluir esse item da lista?')) {
      currentItem.remove();
    }
  }
}

// Event Listeners
addItemBtn.addEventListener('click', addNewItem);
removeAllBtn.addEventListener('click', removeAll);
listItems.addEventListener('click', removeItem);
