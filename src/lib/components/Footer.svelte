<!-- src/lib/components/Footer.svelte -->
<footer>
  <div class="container">
    <p>&copy; {new Date().getFullYear()} StudyCraft. All rights reserved.</p>
    <p class="attribution">
      A prototype made by <a href="https://github.com/rodmarkun" target="_blank" rel="noopener noreferrer">Pablo Rodríguez Martín</a> for <a href="https://backdropbuild.com/" target="_blank" rel="noopener noreferrer">Backdrop Build v5</a>
    </p>
  </div>
</footer>

<style>
  footer {
    background-color: var(--primary-color);
    color: var(--background-color);
    text-align: center;
    padding: 2rem 0;
  }

  .attribution {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  a {
    color: var(--background-color);
    text-decoration: underline;
    transition: opacity 0.3s ease;
  }

  a:hover {
    opacity: 0.8;
  }
</style>