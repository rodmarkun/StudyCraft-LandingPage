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
      background-color: #ebf8ff;
    }
  </style>