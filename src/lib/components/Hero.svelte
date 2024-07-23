<!-- src/lib/components/Hero.svelte -->
<script>
    import { fly } from 'svelte/transition';
  </script>
  
  <section class="hero">
    <div class="container">
      <h1 in:fly="{{ y: 50, duration: 1000 }}">Master Your Studies with StudyCraft</h1>
      <p in:fly="{{ y: 50, duration: 1000, delay: 500 }}">Organize, learn, and excel with our powerful study companion</p>
      <a href="#" class="cta-button" in:fly="{{ y: 50, duration: 1000, delay: 1000 }}">Get Started</a>
    </div>
  </section>
  
  <style>
    .hero {
      background: linear-gradient(135deg, var(--primary-color) 0%, #3182ce 100%);
      color: var(--white);
      text-align: center;
      padding: 8rem 2rem;
      margin-top: 4rem;
    }
  
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  
    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
    }
  </style>