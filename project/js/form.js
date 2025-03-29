document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    
    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message should be at least 10 characters';
        isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
        document.getElementById('contactForm').reset();
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}