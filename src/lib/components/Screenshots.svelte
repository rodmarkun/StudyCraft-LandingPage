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
        <button on:click={prevScreenshot}>&lt;</button>
        {#key currentScreenshot}
          <img src={screenshots[currentScreenshot]} alt="StudyCraft Screenshot" in:fade />
        {/key}
        <button on:click={nextScreenshot}>&gt;</button>
      </div>
    {/if}
  </div>
</section>

<style>
  .screenshots {
    padding: 4rem 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
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
    border: 1px solid var(--primary-color);
  }

  .screenshot-carousel button {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--primary-color);
    transition: opacity 0.3s ease;
  }

  .screenshot-carousel button:hover {
    opacity: 0.7;
  }
</style>