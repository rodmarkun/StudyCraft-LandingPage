<!-- App.svelte -->
<script>
    import { onMount } from 'svelte';
    
    let screenshots = [
      '/path/to/screenshot1.jpg',
      '/path/to/screenshot2.jpg',
      '/path/to/screenshot3.jpg'
    ];
    
    let currentScreenshot = 0;
    
    function nextScreenshot() {
      currentScreenshot = (currentScreenshot + 1) % screenshots.length;
    }
    
    function prevScreenshot() {
      currentScreenshot = (currentScreenshot - 1 + screenshots.length) % screenshots.length;
    }
    
    onMount(() => {
      const interval = setInterval(nextScreenshot, 5000);
      return () => clearInterval(interval);
    });
  </script>
  
  <main>
    <nav>
      <div class="logo">
        <img src="/path/to/studycraft-logo.png" alt="StudyCraft Logo" />
        <span>StudyCraft</span>
      </div>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#cta">Download</a></li>
      </ul>
    </nav>
  
    <section class="hero">
      <h1>Master Your Studies with StudyCraft</h1>
      <p>Organize, learn, and excel with our powerful study companion</p>
      <a href="#" class="cta-button">Get Started</a>
    </section>
  
    <section id="features" class="features">
      <h2>Features</h2>
      <div class="feature-grid">
        <div class="feature">
          <h3>Organize Collections</h3>
          <p>Create and manage study collections effortlessly</p>
        </div>
        <div class="feature">
          <h3>Smart Flashcards</h3>
          <p>Generate AI-powered flashcards from your study materials</p>
        </div>
        <div class="feature">
          <h3>Multiple File Types</h3>
          <p>Support for PDFs, markdown, and web links</p>
        </div>
        <div class="feature">
          <h3>Dark Mode</h3>
          <p>Easy on the eyes for late-night study sessions</p>
        </div>
      </div>
    </section>
  
    <section id="screenshots" class="screenshots">
      <h2>See StudyCraft in Action</h2>
      <div class="screenshot-carousel">
        <button on:click={prevScreenshot}>&lt;</button>
        <img src={screenshots[currentScreenshot]} alt="StudyCraft Screenshot" />
        <button on:click={nextScreenshot}>&gt;</button>
      </div>
    </section>
  
    <section id="cta" class="cta">
      <h2>Ready to Elevate Your Study Game?</h2>
      <a href="#" class="cta-button">Download StudyCraft</a>
    </section>
  
    <footer>
      <p>&copy; 2024 StudyCraft. All rights reserved.</p>
    </footer>
  </main>
  
  <style>
    /* Add your styles here */
    :global(body) {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
  
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #f8f8f8;
    }
  
    .logo {
      display: flex;
      align-items: center;
    }
  
    .logo img {
      width: 40px;
      margin-right: 10px;
    }
  
    nav ul {
      display: flex;
      list-style: none;
    }
  
    nav ul li {
      margin-left: 20px;
    }
  
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background-color: #f0f0f0;
    }
  
    .cta-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
  
    .features, .screenshots, .cta {
      padding: 4rem 2rem;
      text-align: center;
    }
  
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
  
    .screenshot-carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }
  
    .screenshot-carousel img {
      max-width: 80%;
      height: auto;
    }
  
    .screenshot-carousel button {
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
    }
  
    footer {
      text-align: center;
      padding: 1rem;
      background-color: #f8f8f8;
    }
  </style>