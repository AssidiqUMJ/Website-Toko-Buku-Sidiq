// Shared functions across all pages

// Toggle dark mode
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
} else if (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize all Feather icons
    feather.replace();
    
    // Any other initialization code that should run on every page
});

// Book search functionality
function searchBooks(query) {
    // This would be replaced with actual API call in production
    console.log(`Searching for: ${query}`);
    // Return mock data for demo
    return [
        { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 19.99 },
        { id: 2, title: 'The Silent Patient', author: 'Alex Michaelides', price: 19.99 },
        { id: 3, title: 'Dune', author: 'Frank Herbert', price: 19.99 }
    ];
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}