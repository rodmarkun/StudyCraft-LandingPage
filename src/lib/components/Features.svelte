<!-- src/lib/components/Features.svelte -->
<script>
    import { fade } from 'svelte/transition';
    import { intersectionObserver } from '../utils/intersectionObserver';
  
    const features = [
      { title: 'Organize Collections', description: 'Create and manage study collections effortlessly', icon: 'folder-open' },
      { title: 'Smart Flashcards', description: 'Generate AI-powered flashcards from your study materials', icon: 'brain' },
      { title: 'Multiple File Types', description: 'Support for PDFs, markdown, and web links', icon: 'file-text' },
      { title: 'Dark Mode', description: 'Easy on the eyes for late-night study sessions', icon: 'moon' }
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
              <i class="fas fa-{feature.icon}"></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }
  
    .feature {
      background-color: var(--white);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
  
    .feature:hover {
      transform: translateY(-5px);
    }
  
    .feature i {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
  
    .feature h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  </style>