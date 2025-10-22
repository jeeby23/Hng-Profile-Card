document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault()

  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const subject = document.getElementById('subject')
  const message = document.getElementById('message')
  const success = document.getElementById('success')

  const errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message'),
  }

  // Reset all error messages
  Object.values(errors).forEach((el) => (el.textContent = ''))
  success.textContent = ''

  let valid = true

  if (!name.value.trim()) {
    errors.name.textContent = 'Full name is required.'
    valid = false
  }

  if (!email.value.trim()) {
    errors.email.textContent = 'Email is required.'
    valid = false
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    errors.email.textContent = 'Please enter a valid email address.'
    valid = false
  }

  if (!subject.value.trim()) {
    errors.subject.textContent = 'Subject is required.'
    valid = false
  }

  if (message.value.trim().length < 10) {
    errors.message.textContent = 'Message must be at least 10 characters.'
    valid = false
  }

  if (valid) {
    success.textContent = 'Thank you! Your message has been successfully submitted.'
    e.target.reset()
  }
})
