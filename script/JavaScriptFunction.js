// Function to toggle the visibility of a navigation menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Show the menu
    } else {
        menu.style.display = 'none'; // Hide the menu
    }
}

// Function to display a modal popup
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Show the modal
}

// Function to close a modal popup
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none'; // Hide the modal
}

// Function to dynamically load content into a section
function loadContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    section.innerHTML = content; // Replace the section's content with the new content
}

// Function to scroll smoothly to a specific section of the page
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
}

function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  console.log(validateEmail("test@example.com")); // true
  