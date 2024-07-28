<!-- src/lib/components/Screenshots.svelte -->
<script>
  import { onMount } from 'svelte';
  import { fade, slide, fly } from 'svelte/transition';
  import { intersectionObserver } from '../utils/intersectionObserver';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  
  let screenshots = [
    '/images/screenshot1.png',
    '/images/screenshot2.png',
    '/images/screenshot3.png',
    '/images/screenshot4.png',
    '/images/screenshot5.png'
  ];
 
  let currentScreenshot = 0;
  let visible = false;
  let direction = 1;

  const progress = tweened(0, {
    duration: 500,
    easing: cubicOut
  });
 
  function changeScreenshot(newIndex) {
    direction = newIndex > currentScreenshot ? 1 : -1;
    currentScreenshot = (newIndex + screenshots.length) % screenshots.length;
    progress.set(1);
  }

  function handleKeydown(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      changeScreenshot(index);
    }
  }

  $: prevIndex = (currentScreenshot - 1 + screenshots.length) % screenshots.length;
  $: nextIndex = (currentScreenshot + 1) % screenshots.length;

  onMount(() => {
    const interval = setInterval(() => {
      changeScreenshot(currentScreenshot + 1);
    }, 5000);
    return () => clearInterval(interval);
  });
</script>

<section id="screenshots" class="screenshots" use:intersectionObserver on:intersect={({ detail }) => visible = detail}>
  <div class="container">
    <h2>See StudyCraft in Action</h2>
    {#if visible}
      <div class="screenshot-carousel" in:slide>
        <button on:click={() => changeScreenshot(currentScreenshot - 1)} class="nav-button prev" aria-label="Previous screenshot">&lt;</button>
        <div class="screenshot-wrapper">
          {#key currentScreenshot}
            <div class="screenshot-container" in:fly={{ x: 100 * direction, duration: 500 }} out:fly={{ x: -100 * direction, duration: 500 }}>
              <img
                src={screenshots[prevIndex]}
                alt="Previous Screenshot"
                class="screenshot preview prev-preview"
              />
              <img
                src={screenshots[currentScreenshot]}
                alt={`StudyCraft Screenshot ${currentScreenshot + 1}`}
                class="screenshot current"
              />
              <img
                src={screenshots[nextIndex]}
                alt="Next Screenshot"
                class="screenshot preview next-preview"
              />
            </div>
          {/key}
        </div>
        <button on:click={() => changeScreenshot(currentScreenshot + 1)} class="nav-button next" aria-label="Next screenshot">&gt;</button>
      </div>
      <div class="dots" role="tablist">
        {#each screenshots as _, i}
          <button
            class="dot"
            class:active={i === currentScreenshot}
            on:click={() => changeScreenshot(i)}
            on:keydown={(e) => handleKeydown(e, i)}
            role="tab"
            aria-selected={i === currentScreenshot}
            aria-label={`View screenshot ${i + 1}`}
          ></button>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .screenshots {
    padding: 4rem 0;
    background-color: var(--accent-color);
  }
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
  .screenshot-carousel {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  .screenshot-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px; /* Adjust this value based on your screenshot dimensions */
    position: relative;
  }
  .screenshot-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .screenshot {
    max-height: 100%;
    width: auto;
    position: absolute;
    transition: all 0.5s ease;
  }
  .screenshot.current {
    max-width: 60%;
    z-index: 2;
  }
  .screenshot.preview {
    max-width: 20%;
    opacity: 0.7;
    filter: blur(2px);
  }
  .prev-preview {
    left: 10%;
    transform: translateX(-50%);
  }
  .next-preview {
    right: 10%;
    transform: translateX(50%);
  }
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
    z-index: 3;
  }
  .nav-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }
  .dots {
    text-align: center;
    margin-top: 20px;
  }
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #bbb;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: none;
    padding: 0;
  }
  .dot.active {
    background-color: #333;
  }
</style>