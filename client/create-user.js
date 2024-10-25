const formUserDOM = document.querySelector('.user-form');
const userNameInputDOM = document.querySelector('.user-name-input');
const userEmailInputDOM = document.querySelector('.user-email-input');
const userPasswordInputDOM = document.querySelector('.user-password-input');
const formAlertUserDOM = document.querySelector('.form-alert');

formUserDOM.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = userNameInputDOM.value;
  const email = userEmailInputDOM.value;
  const password = userPasswordInputDOM.value;

  try {
    await axios.post('/api/v1/users', { name, email, password });
    formAlertUserDOM.style.display = 'block';
    formAlertUserDOM.textContent = 'Success, user created!';
    formAlertUserDOM.classList.add('text-success');

    userNameInputDOM.value = '';
    userEmailInputDOM.value = '';
    userPasswordInputDOM.value = '';
  } catch (error) {
    formAlertUserDOM.style.display = 'block';
    formAlertUserDOM.innerHTML = 'Error, please try again';
    formAlertUserDOM.classList.add('text-danger');
  }

  setTimeout(() => {
    formAlertUserDOM.style.display = 'none';
    formAlertUserDOM.classList.remove('text-success', 'text-danger');
  }, 3000);
});

const token = localStorage.getItem('token');

if (token) {
    window.location.href = 'index.html';
}