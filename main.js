import './style.css'

// Obtener elementos del formulario
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// Manejar el envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  
  // Validar que ambos campos tengan contenido
  if (email && password) {
    // Mostrar mensaje de éxito
    messageDiv.classList.remove('hidden');
    
    // Limpiar los campos
    emailInput.value = '';
    passwordInput.value = '';
    
    // Opcional: ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      messageDiv.classList.add('hidden');
    }, 3000);
  } else {
    alert('Por favor completa todos los campos');
  }
});
