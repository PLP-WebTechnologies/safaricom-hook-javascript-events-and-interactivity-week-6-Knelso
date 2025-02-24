// Toggle Background Color
const toggleBgBtn = document.getElementById('toggle-bg-btn');
let currentBgColor = 'white';
toggleBgBtn.addEventListener('click', () => {
  currentBgColor = currentBgColor === 'white' ? 'lightblue' : 'white';
  document.body.style.backgroundColor = currentBgColor;
});

// Slider with Real-Time Feedback
const textSizeSlider = document.getElementById('text-size-slider');
const dynamicText = document.getElementById('dynamic-text');
textSizeSlider.addEventListener('input', () => {
  dynamicText.style.fontSize = `${textSizeSlider.value}px`;
});

// Modal with Event Listeners
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});

// Form Validation
const userForm = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

userForm.addEventListener('submit', (e) => {
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = 'Name must be at least 3 characters.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Validate Password
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(passwordInput.value.trim())) {
    passwordError.textContent = 'Password must be at least 8 characters long, with one uppercase letter and one number.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (!isValid) {
    e.preventDefault(); // Prevent form submission
  }
});

// Bonus Dropdown
const customDropdown = document.getElementById('custom-dropdown');
const dropdownMessage = document.getElementById('dropdown-message');
customDropdown.addEventListener('change', () => {
  dropdownMessage.textContent = customDropdown.value || '';
});