import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Team Player and Contributor",
  "Eager Learner",
];

const typedText = document.getElementById("typed-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 50;
const deletingSpeed = 20;
const pauseAfterType = 1200;
const pauseAfterDelete = 400;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // Typing
    typedText.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => (isDeleting = true), pauseAfterType);
    }
  } else {
    // Deleting
    typedText.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(() => {}, pauseAfterDelete);
    }
  }

  const delay = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeLoop, delay);
}

typeLoop();

const cursorLight = document.getElementById("cursor-light");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorLight.style.background = `
    radial-gradient(
      600px circle at ${x}px ${y}px,
      rgba(255, 255, 255, 0.08),
      rgba(15, 23, 32, 0.95) 60%
    )
  `;
});

document.querySelectorAll(".portfolio-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  });
});

