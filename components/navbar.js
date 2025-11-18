class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
.dark nav {
          background: rgba(31, 41, 55, 0.8);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .logo {
          color: #4f46e5;
          font-weight: 700;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }
        
        .dark .logo {
          color: #818cf8;
        }
        
        .logo-icon {
          margin-right: 0.5rem;
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .search-container {
          position: relative;
          display: none;
        }
        
        @media (min-width: 768px) {
          .search-container {
            display: block;
          }
        }
        
        .search-input {
          padding: 0.5rem 1rem 0.5rem 2.5rem;
          border-radius: 9999px;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          width: 250px;
          transition: all 0.2s;
        }
        
        .dark .search-input {
          background-color: #1f2937;
          border-color: #374151;
          color: white;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #4f46e5;
          width: 300px;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        
        .dark .search-icon {
          color: #6b7280;
        }
        
        .nav-icons {
          display: flex;
          gap: 1rem;
        }
        
        .nav-icon {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s;
          color: #4b5563;
        }
        
        .dark .nav-icon {
          color: #d1d5db;
        }
        
        .nav-icon:hover {
          background-color: #f3f4f6;
          color: #4f46e5;
        }
        
        .dark .nav-icon:hover {
          background-color: #374151;
          color: #818cf8;
        }
        
        .user-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          object-fit: cover;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        
        .user-avatar:hover {
          border-color: #4f46e5;
        }
        
        .dark .user-avatar:hover {
          border-color: #818cf8;
        }
        
        .mobile-menu-btn {
          display: block;
        }
        
        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }
      </style>
      <nav>
        <div class="flex items-center">
          <button class="mobile-menu-btn mr-4 text-gray-600 dark:text-gray-300">
            <i data-feather="menu" class="w-6 h-6"></i>
          </button>
          <a href="/" class="logo">
            <i data-feather="book-open" class="logo-icon"></i>
            <span>Toko Buku Sidiq</span>
          </a>
        </div>
        
        <div class="nav-right">
          <div class="search-container">
            <i data-feather="search" class="search-icon"></i>
            <input type="text" placeholder="Search books..." class="search-input">
          </div>
          
          <div class="nav-icons">
            <div class="nav-icon" onclick="toggleDarkMode()">
              <i data-feather="moon" class="dark:hidden"></i>
              <i data-feather="sun" class="hidden dark:block"></i>
            </div>
            <div class="nav-icon">
              <i data-feather="bell"></i>
            </div>
          </div>
          
          <img src="http://static.photos/people/200x200/10" alt="User" class="user-avatar">
        </div>
      </nav>
    `;
    
    // Add event listener for mobile menu button
    this.shadowRoot.querySelector('.mobile-menu-btn').addEventListener('click', () => {
      document.querySelector('custom-sidebar').toggleMobileMenu();
    });
    
    // Initialize Feather icons in shadow DOM
    const featherScript = document.createElement('script');
    featherScript.src = 'https://unpkg.com/feather-icons';
    this.shadowRoot.appendChild(featherScript);
    featherScript.onload = () => {
      feather.replace();
    };
  }
}

customElements.define('custom-navbar', CustomNavbar);