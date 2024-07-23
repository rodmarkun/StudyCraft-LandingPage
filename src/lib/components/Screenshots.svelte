<!-- src/lib/components/Screenshots.svelte -->
<script>
    import { fade, slide } from 'svelte/transition';
    import { intersectionObserver } from '../utils/intersectionObserver';
  
    let screenshots = [
      '/images/screenshot1.jpg',
      '/images/screenshot2.jpg',
      '/images/screenshot3.jpg'
    ];
    
    let currentScreenshot = 0;
    let visible = false;
    
    function nextScreenshot() {
      currentScreenshot = (currentScreenshot + 1) % screenshots.length;
    }
    
    function prevScreenshot() {
      currentScreenshot = (currentScreenshot - 1 + screenshots.length) % screenshots.length;
    }
  </script>
  
  <section id="screenshots" class="screenshots" use:intersectionObserver on:intersect={({ detail }) => visible = detail}>
    <div class="container">
      <h2>See StudyCraft in Action</h2>
      {#if visible}
        <div class="screenshot-carousel" in:slide>
          <button on:click={prevScreenshot}><i class="fas fa-chevron-left"></i></button>
          {#key currentScreenshot}
            <img src={screenshots[currentScreenshot]} alt="StudyCraft Screenshot" in:fade />
          {/key}
          <button on:click={nextScreenshot}><i class="fas fa-chevron-right"></i></button>
        </div>
      {/if}
    </div>
  </section>
  
  <style>
    .screenshot-carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }
  
    .screenshot-carousel img {
      max-width: 80%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .screenshot-carousel button {
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--primary-color);
      transition: color 0.3s ease;
    }
  
    .screenshot-carousel button:hover {
      color: #3182ce;
    }
  </style>