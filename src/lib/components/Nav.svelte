<!-- src/lib/components/Nav.svelte -->
<script>
    import { fly } from 'svelte/transition';
  </script>
  
  <nav>
    <div class="container">
      <div class="logo" in:fly="{{ y: -50, duration: 1000 }}">
        <img src="/images/studycraft-logo.png" alt="StudyCraft Logo" />
        <span>StudyCraft</span>
      </div>
      <ul in:fly="{{ y: -50, duration: 1000, delay: 200 }}">
        <li><a href="#features">Features</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#cta">Download</a></li>
      </ul>
    </div>
  </nav>
  
  <style>
    nav {
      background-color: var(--white);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
  
    .logo {
      display: flex;
      align-items: center;
    }
  
    .logo img {
      width: 40px;
      margin-right: 10px;
    }
  
    .logo span {
      font-weight: 600;
      font-size: 1.2rem;
    }
  
    ul {
      display: flex;
      list-style: none;
    }
  
    li {
      margin-left: 2rem;
    }
  
    a {
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
  
    a:hover {
      color: var(--primary-color);
    }
  
    @media (max-width: 768px) {
      ul {
        display: none;
      }
    }
  </style>