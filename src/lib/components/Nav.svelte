<!-- src/lib/components/Nav.svelte -->
<script>
  import { fly } from 'svelte/transition';
  import logo from '../../static/StudyCraftLogo2Transparente.png';
</script>

<nav>
  <div class="container">
    <div class="logo" in:fly="{{ y: -50, duration: 1000 }}">
      <img src={logo} alt="StudyCraft Logo" />
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
    background-color: var(--background-color);
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
    height: 40px;
    width: auto;
    margin-right: 10px;
  }

  .logo span {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary-color);
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
    color: var(--primary-color);
    font-weight: 600;
    transition: opacity 0.3s ease;
  }

  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
</style>