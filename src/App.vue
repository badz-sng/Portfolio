<script setup>
import PortfolioCard from './components/PortfolioCard.vue'
import deskr from './assets/deskr.png'
import irims from './assets/irims.png'
import filepilot from './assets/filepilot.png'

// certificate images

import CertificateCarousel from './components/CertificateCarousel.vue'
import cybsec from './assets/CyberSecTech.jpg'
import cybsec2 from './assets/Cybersecurity.jpg'
import cybsecaw from './assets/CybersecurityAwareness.jpg'
import vawc from './assets/VAWC.jpg'


const certificates = [
  { title: 'Cybersecurity Technician', image: cybsec },
  { title: 'Cybersecurity Certification by CISCO', image: cybsec2 },
  { title: 'Cybersecurity Awareness', image: cybsecaw },
  { title: 'VAWC Training Completion', image: vawc }
]

const projects = [
  { id: 1, title: 'FilePilot', description: 'Document Management System, tailored for modern workflows', link: 'https://github.com/badz-sng/registrar-document-management-system', image: filepilot },
  { id: 2, title: 'Incident Report Information Management System', description: 'A web and mobile application built to streamline operations and emergency response.', link: 'https://github.com/prxncxss03/lifesaver-web-backend', image: irims },
  { id: 3, title: 'Desk/r', description: 'Hot-desking web application created to streamline workspace management.', link: 'https://github.com/badz-sng/hotdesk', image: deskr }
]
</script>

<template>
  <div id="app" class="page">
    <header class="site-header">
      <div class="container header-inner">
        <h1 class="site-title">
          Hi there!
        </h1>

        <nav class="site-nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main class="container main-content">
      <section class="hero">
        <h1 class="site-title">
          Emmanuel Sunga —
          <span id="typed-text"></span>
          <span class="caret">|</span>
        </h1>
        <p>I build fast, accessible web apps. I focus on Vue plus Laravel Framework for fast, secure, and scalable solutions.</p>
        <a class="cta" href="https://github.com/badz-sng" target="_blank">See my work</a>
      </section>
<hr>
      <section id="projects" class="projects">
        <h3>Selected Projects</h3>
        <div class="projects-grid">
          <PortfolioCard
            v-for="p in projects"
            :key="p.id"
            :title="p.title"
            :description="p.description"
            :link="p.link"
            :image="p.image"
          />
        </div>
      </section>
<hr>
      <section id="about" class="about">
        <h3>About</h3>
        <p>I am a passionate full-stack developer with an ample experience in Vue.js and Laravel. I enjoy building scalable web applications and solving complex problems with clean, efficient code.</p>
      </section>
<hr>
      <section class="certificates">
        <h3>Certifications</h3>
        <CertificateCarousel :certificates="certificates" />
      </section>

      <section id="contact" class="contact">
        <h3>Contact</h3>
        <p>Let’s work together — <a href="mailto:emmanuel.fullstack.dev@gmail.com">emmanuel.fullstack.dev@gmail.com</a></p>
        <p>Contact number: <a href="tel:+639475529362">+639475529362</a></p>
        <p>If you are an employer, <a href="https://drive.google.com/file/d/1QIJEJnu8jUPZcHu173GLZX4gmffI_yT-/view?usp=sharing">here</a> is my resume.</p>
        <hr>
        <p>Find me on
          <a href="
          https://www.linkedin.com/in/sunga-emmanuel-p/" target="_blank" rel="noopener">LinkedIn</a>,
          <a href="
          https://github.com/badz-sng" target="_blank" rel="noopener">GitHub</a>
        </p>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <small>Built with Vite + Vue, made with ❤️</small>
      </div>
    </footer>
  </div>
</template>
