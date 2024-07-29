<!-- src/lib/components/Hero.svelte -->
<script>
  import { fly } from 'svelte/transition';
</script>

<section class="hero">
  <div class="container">
    <h1 in:fly="{{ y: 50, duration: 1000 }}">Master Your Studies with StudyCraft</h1>
    <p in:fly="{{ y: 50, duration: 1000, delay: 500 }}">Organize, learn, and excel with our powerful study companion</p>
    <a href="https://github.com/rodmarkun/StudyCraft" target="_blank" class="cta-button" in:fly="{{ y: 50, duration: 1000, delay: 1000 }}">Fully open-source!</a>
    <div class="video-wrapper" in:fly="{{ y: 50, duration: 1000, delay: 1500 }}">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YcFcxTFDOJQ"
        title="StudyCraft Demo Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</section>

<style>
  .hero {
    background-color: var(--background-color);
    color: var(--text-color);
    text-align: center;
    padding: 8rem 2rem 4rem;
    margin-top: 4rem;
  }
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
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
  .video-wrapper {
    margin-top: 4rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--primary-color);
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
</style>