let users = [];

function showRegistration() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>Registration</h2>
    <form id="registrationForm" onsubmit="registerUser(event)">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" required><br>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" required><br>
      <label for="username">Username:</label>
      <input type="text" id="username" required><br>
      <label for="password">Password:</label>
      <input type="password" id="password" required><br>
      <label for="age">Age:</label>
      <input type="number" id="age" required><br>
      <label for="gender">Gender:</label>
      <select id="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select><br>
      <button type="submit">Register</button>
    </form>
  `;
}

function registerUser(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const status = 'active';

  const user = { firstName, lastName, username, password, age, gender, status };
  users.push(user);

  // Save to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('User registered successfully!');
}

function showLogin() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>Login</h2>
    <form id="loginForm" onsubmit="loginUser(event)">
      <label for="loginUsername">Username:</label>
      <input type="text" id="loginUsername" required><br>
      <label for="loginPassword">Password:</label>
      <input type="password" id="loginPassword" required><br>
      <button type="submit">Login</button>
    </form>
  `;
}

function loginUser(event) {
  event.preventDefault();

  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Check if user exists
  const user = users.find(u => u.username === loginUsername);

  if (!user || user.password !== loginPassword) {
    alert('Invalid username or password');
  } else {
    alert('Login successful!');
  }
}

function showUsers() {
  const content = document.getElementById('content');
  const userList = users.map(user => `
    <div>
      <strong>${user.firstName} ${user.lastName}</strong> (${user.username}), Age: ${user.age}, Gender: ${user.gender}, Status: ${user.status}
    </div>
  `).join('');

  content.innerHTML = `
    <h2>User List</h2>
    ${userList}
  `;
}