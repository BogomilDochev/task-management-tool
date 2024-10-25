const formLoginDOM = document.querySelector('.login-form');
const loginEmailInputDOM = document.querySelector('.login-email-input');
const loginPasswordInputDOM = document.querySelector('.login-password-input');
const formAlertLoginDOM = document.querySelector('.form-alert');

formLoginDOM.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = loginEmailInputDOM.value;
  const password = loginPasswordInputDOM.value;

  try {
    const { data } = await axios.post('/api/v1/auth/login', { email, password });
    formAlertLoginDOM.style.display = 'block';
    formAlertLoginDOM.textContent = 'Login successful!';
    formAlertLoginDOM.classList.add('text-success');

    const token = data.token;
    localStorage.setItem('token', token);
    window.location.href = 'index.html';
  } catch (error) {
    formAlertLoginDOM.style.display = 'block';
    formAlertLoginDOM.textContent = 'Login failed, please try again';
    formAlertLoginDOM.classList.add('text-danger');
  }

  setTimeout(() => {
    formAlertLoginDOM.style.display = 'none';
    formAlertLoginDOM.classList.remove('text-success', 'text-danger');
  }, 3000);
});

const token = localStorage.getItem('token');

if (token) {
    window.location.href = 'index.html';
}