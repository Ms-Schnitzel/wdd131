const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

// li.textContent = input.value;
// deleteButton.textContent = '❌';

// li.append(deleteButton);
// list.append(li);

button.addEventListener('click', function () {
  if (input.value.trim() !== "") {
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListenter("click", function () {
      list.removeChild(li);
      input.focus();
    })

    input.value = "";
    input.focus();
  } else {
    alert("Please enter your Book and Chapter!")
    input.focus();
  }
});

