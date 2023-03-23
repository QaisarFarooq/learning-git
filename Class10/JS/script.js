const loginForm = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const fullNameInput = document.querySelector('#fullName');


loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting
  
  const email = emailInput.value;
  const password = passwordInput.value;
  const fullName = fullNameInput.value;

  // Check if email and password are correct
  if (email === 'admin@user.com' && password === '123456') {
    // Store user information in localStorage.
    localStorage.setItem('fullName', fullName)
    // Redirect to home page or show success message
    window.location.replace('home.html')
    
    
    // alert('Login successful!');
  } else {
    // Show error message
    Toastify({
  text: "Wrong email or password. Please try again.",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #8360c3, #2ebf91)",
  },
  
}).showToast();;
  }
});


