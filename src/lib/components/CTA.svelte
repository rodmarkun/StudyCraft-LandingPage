<!-- src/lib/components/CTA.svelte -->
<script>
  import { fly } from 'svelte/transition';
  import { intersectionObserver } from '../utils/intersectionObserver';

  let visible = false;
</script>

<section id="cta" class="cta" use:intersectionObserver on:intersect={({ detail }) => visible = detail}>
  <div class="container">
    {#if visible}
      <h2 in:fly="{{ y: 50, duration: 1000 }}">Ready to Elevate Your Study Game?</h2>
      <a href="#" class="cta-button" in:fly="{{ y: 50, duration: 1000, delay: 500 }}">Download StudyCraft</a>
    {/if}
  </div>
</section>

<style>
  .cta {
    background-color: var(--accent-color);
    text-align: center;
    padding: 6rem 0;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .cta-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: var(--background-color);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s ease;
  }

  .cta-button:hover {
    opacity: 0.8;
  }
</style>