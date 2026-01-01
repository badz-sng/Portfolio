<script setup>
import PortfolioCard from './components/PortfolioCard.vue'

const projects = [
  { id: 1, title: 'Project One', description: 'A short description of project one.', link: '#' },
  { id: 2, title: 'Project Two', description: 'A short description of project two.', link: '#' },
  { id: 3, title: 'Project Three', description: 'A short description of project three.', link: '#' }
]
</script>

<template>
  <div id="app" class="page">
    <header class="site-header">
      <div class="container header-inner">
        <h1 class="site-title">Your Name — Frontend Developer</h1>
        <nav class="site-nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main class="container main-content">
      <section class="hero">
        <h2>Hi, I'm Your Name</h2>
        <p>I build fast, accessible web apps. I focus on Vue, CSS, and delightful UIs.</p>
        <a class="cta" href="#projects">See my work</a>
      </section>

      <section id="projects" class="projects">
        <h3>Selected Projects</h3>
        <div class="projects-grid">
          <PortfolioCard
            v-for="p in projects"
            :key="p.id"
            :title="p.title"
            :description="p.description"
            :link="p.link"
          />
        </div>
      </section>

      <section id="about" class="about">
        <h3>About</h3>
        <p>Short bio — what you do and the kind of work you enjoy.</p>
      </section>

      <section id="contact" class="contact">
        <h3>Contact</h3>
        <p>Let’s work together — <a href="mailto:you@example.com">you@example.com</a></p>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <small>© Your Name — Built with Vite + Vue</small>
      </div>
    </footer>
  </div>
</template>
