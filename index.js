document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const tableBody = document.querySelector('tbody');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('task').value;
    const priority = document.getElementById('priority').value;

    if (taskName && priority) {
      const newRow = document.createElement('tr');

      const taskCell = document.createElement('td');
      taskCell.textContent = taskName;

      const priorityCell = document.createElement('td');
      priorityCell.textContent = priority;
      priority === 'High' ? priorityCell.style.backgroundColor = 'red' : priorityCell.style.backgroundColor = 'green';

      const favoriteCell = document.createElement('td');
      favoriteCell.textContent = 'Favourite';

      newRow.appendChild(taskCell);
      newRow.appendChild(priorityCell);
      newRow.appendChild(favoriteCell);

      tableBody.appendChild(newRow);

      // Clear the form fields after submission
      document.getElementById('task').value = '';
      document.getElementById('priority').value = '';
    } else {
      alert('Please fill in both Task Name and Priority fields');
    }
  });
});


