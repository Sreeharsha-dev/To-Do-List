// Get the input element and the list element
const input = document.querySelector('input[name="todo-item"]');
const list = document.querySelector('.list-group');

// Add event listener to the form submit button
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the value of the input
  const value = input.value.trim();

  // If the input value is not empty
  if (value !== '') {
    // Create a new list item element
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.innerHTML = `${value}<span><i class="fas fa-check-circle mr-2"></i><i class="fas fa-edit mr-2"></i><i class="fas fa-trash"></i></span>`;

    // Add the item to the list
    list.insertBefore(item, list.firstChild);

    // Clear the input
    input.value = '';
  }
});

// Add event listener to the list to handle item buttons
list.addEventListener('click', function(e) {
  // If a delete button was clicked
  if (e.target.classList.contains('fa-trash')) {
    // Remove the list item from the DOM
    e.target.closest('.list-group-item').remove();
  }
});
