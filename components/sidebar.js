class CustomSidebar extends HTMLElement {
  constructor() {
    super();
    this.isMobileOpen = false;
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMobileOpen && !this.contains(e.target) && !e.target.closest('custom-navbar')) {
        this.toggleMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileOpen = !this.isMobileOpen;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .sidebar {
          background: white;
          width: 17rem;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 40;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          overflow-y: auto;
          border-right: 1px solid rgba(0, 0, 0, 0.05);
        }
.dark .sidebar {
          background: #1f2937;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }
        
        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          height: 72px;
          display: flex;
          align-items: center;
        }
        
        .dark .sidebar-header {
          border-bottom-color: #374151;
        }
        
        .sidebar-logo {
          color: #4f46e5;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        
        .dark .sidebar-logo {
          color: #818cf8;
        }
        
        .sidebar-logo-icon {
          margin-right: 0.5rem;
        }
        
        .sidebar-menu {
          padding: 1rem;
        }
        
        .menu-section {
          margin-bottom: 1.5rem;
        }
        
        .menu-title {
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 0.75rem;
          letter-spacing: 0.05em;
        }
        
        .dark .menu-title {
          color: #9ca3af;
        }
        
        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .menu-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          color: #4b5563;
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .dark .menu-item {
          color: #d1d5db;
        }
        
        .menu-item:hover {
          background-color: #f3f4f6;
          color: #4f46e5;
        }
        
        .dark .menu-item:hover {
          background-color: #374151;
          color: #818cf8;
        }
        
        .menu-item.active {
          background-color: #eef2ff;
          color: #4f46e5;
          font-weight: 500;
        }
        
        .dark .menu-item.active {
          background-color: #3730a3;
          color: #a5b4fc;
        }
        
        .menu-item-icon {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
        }
        
        .sidebar-footer {
          padding: 1.5rem;
          border-top: 1px solid #e5e7eb;
          margin-top: auto;
        }
        
        .dark .sidebar-footer {
          border-top-color: #374151;
        }
        
        .user-info {
          display: flex;
          align-items: center;
        }
        
        .user-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          object-fit: cover;
          margin-right: 0.75rem;
        }
        
        .user-name {
          font-weight: 500;
          color: #111827;
        }
        
        .dark .user-name {
          color: #f3f4f6;
        }
        
        .user-email {
          font-size: 0.75rem;
          color: #6b7280;
        }
        
        .dark .user-email {
          color: #9ca3af;
        }
        
        .logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.5rem;
          margin-top: 1rem;
          border-radius: 0.375rem;
          background-color: #f3f4f6;
          color: #4b5563;
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        
        .dark .logout-btn {
          background-color: #374151;
          color: #d1d5db;
        }
        
        .logout-btn:hover {
          background-color: #e5e7eb;
          color: #1f2937;
        }
        
        .dark .logout-btn:hover {
          background-color: #4b5563;
          color: #f3f4f6;
        }
        
        .logout-icon {
          margin-right: 0.5rem;
          width: 1rem;
          height: 1rem;
        }
        
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 30;
          display: none;
        }
        
        @media (max-width: 767px) {
          .sidebar {
            transform: translateX(-100%);
          }
          
          .sidebar.mobile-open {
            transform: translateX(0);
          }
          
          .mobile-overlay.active {
            display: block;
          }
        }
      </style>
      
      <div class="mobile-overlay ${this.isMobileOpen ? 'active' : ''}"></div>
      <aside class="sidebar ${this.isMobileOpen ? 'mobile-open' : ''}">
        <div class="sidebar-header">
          <div class="sidebar-logo">
            <i data-feather="book-open" class="sidebar-logo-icon"></i>
            <span>Toko Buku Sidiq</span>
          </div>
        </div>
        
        <div class="sidebar-menu">
          <div class="menu-section">
            <h3 class="menu-title">Main</h3>
            <div class="menu-items">
              <a href="/" class="menu-item active">
                <i data-feather="home" class="menu-item-icon"></i>
                Dashboard
              </a>
              <a href="books.html" class="menu-item">
                <i data-feather="book" class="menu-item-icon"></i>
                Books
              </a>
              <a href="authors.html" class="menu-item">
                <i data-feather="pen-tool" class="menu-item-icon"></i>
                Authors
              </a>
              <a href="genres.html" class="menu-item">
                <i data-feather="list" class="menu-item-icon"></i>
                Genres
              </a>
              <a href="/transactions.html" class="menu-item">
                <i data-feather="dollar-sign" class="menu-item-icon"></i>
                Transactions
              </a>
            </div>
          </div>
          
          <div class="menu-section">
            <h3 class="menu-title">Management</h3>
            <div class="menu-items">
              <a href="/inventory.html" class="menu-item">
                <i data-feather="database" class="menu-item-icon"></i>
                Inventory
              </a>
              <a href="/reports.html" class="menu-item">
                <i data-feather="bar-chart-2" class="menu-item-icon"></i>
                Reports
              </a>
              <a href="/settings.html" class="menu-item">
                <i data-feather="settings" class="menu-item-icon"></i>
                Settings
              </a>
            </div>
          </div>
        </div>
        
        <div class="sidebar-footer">
          <div class="user-info">
            <img src="http://static.photos/people/200x200/10" alt="User" class="user-avatar">
            <div>
              <div class="user-name">Admin User</div>
              <div class="user-email">admin@bookmaster.com</div>
            </div>
          </div>
          <button class="logout-btn">
            <i data-feather="log-out" class="logout-icon"></i>
            Logout
          </button>
        </div>
      </aside>
    `;
    
    // Initialize Feather icons in shadow DOM
    const featherScript = document.createElement('script');
    featherScript.src = 'https://unpkg.com/feather-icons';
    this.shadowRoot.appendChild(featherScript);
    featherScript.onload = () => {
      feather.replace();
    };
  }
}

customElements.define('custom-sidebar', CustomSidebar);