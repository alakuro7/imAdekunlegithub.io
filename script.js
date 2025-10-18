const toggleButton = document.querySelector('[data-testid="toggle-button"]');
const bio = document.querySelector('[data-testid="profile-bio"]');

toggleButton.addEventListener('click', () => {
  bio.classList.toggle('hidden');
  toggleButton.textContent = bio.classList.contains('hidden') ? 'Show Bio' : 'Hide Bio';
});