class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 1.5rem;
          text-align: center;
          margin-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          font-size: 0.875rem;
          color: #6b7280;
        }
.dark footer {
          background: rgba(31, 41, 55, 0.8);
          border-top-color: #374151;
          color: #9ca3af;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .footer-link {
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .dark .footer-link {
          color: #d1d5db;
        }
        
        .footer-link:hover {
          color: #4f46e5;
        }
        
        .dark .footer-link:hover {
          color: #818cf8;
        }
      </style>
      <footer>
        <div class="footer-links">
          <a href="/about.html" class="footer-link">About</a>
          <a href="/terms.html" class="footer-link">Terms</a>
          <a href="/privacy.html" class="footer-link">Privacy</a>
          <a href="/contact.html" class="footer-link">Contact</a>
        </div>
        <p>&copy; ${new Date().getFullYear()} Toko Buku Sidiq. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);