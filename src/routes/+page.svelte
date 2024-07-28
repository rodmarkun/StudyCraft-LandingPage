<script>
    import '../lib/styles/global.css';
    import Nav from '$lib/components/Nav.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Features from '$lib/components/Features.svelte';
    import Screenshots from '$lib/components/Screenshots.svelte';
    import CTA from '$lib/components/CTA.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <svelte:head>
    <title>StudyCraft - Master Your Studies</title>
    <meta name="description" content="Organize, learn, and excel with StudyCraft, your powerful study companion">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
    <link rel="icon" type="image/x-icon" href="/StudyCraftLogo2Transparente.ico">
  </svelte:head>
  
  <main>
    <Nav />
    <Hero />
    <Features />
    <Screenshots />
    <CTA />
    <Footer />
  </main>