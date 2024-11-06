const form = document.querySelector("#employee_info");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {
    photo: formData.get('photo').name,
    firstName: formData.get('firstname'),
    lastName: formData.get('lastname'),
    email: formData.get('email'),
    hireDate: formData.get('hire_date'),
  };

  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td><img src="images/${data.photo}" alt="Employee Photo"></td>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.hireDate}</td>
    <td><button class="btn btn-danger">Delete</button></td>
  `;
  document.querySelector("#employeeList").append(tableRow);

  form.reset();
});

document.querySelector("#employeeList").addEventListener('click', (event) => {
  const confirmDelete = confirm('Are you sure you want to delete this employee?');
  if (confirmDelete) {
    event.target.closest('tr').remove();
  }
});