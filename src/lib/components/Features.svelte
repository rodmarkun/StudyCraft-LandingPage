<!-- src/lib/components/Features.svelte -->
<script>
  import { fade } from 'svelte/transition';
  import { intersectionObserver } from '../utils/intersectionObserver';

  const features = [
    { title: 'Organize Collections', description: 'Create and manage study collections effortlessly' },
    { title: 'Smart Flashcards', description: 'Generate AI-powered flashcards from your study materials' },
    { title: 'Multiple File Types', description: 'Support for PDFs, markdown, and web links' },
    { title: 'Dark Mode', description: 'Easy on the eyes for late-night study sessions' }
  ];

  let visible = false;
</script>

<section id="features" class="features" use:intersectionObserver on:intersect={({ detail }) => visible = detail}>
  <div class="container">
    <h2>Features</h2>
    <div class="feature-grid">
      {#each features as feature, i}
        {#if visible}
          <div class="feature" in:fade={{delay: i * 200, duration: 300}}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .features {
    background-color: var(--accent-color);
    padding: 4rem 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .feature {
    background-color: var(--background-color);
    padding: 2rem;
    border: 1px solid var(--primary-color);
  }

  .feature h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
</style>